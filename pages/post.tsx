import { getPost, getPostsCollection, iPost } from "../lib/posts";
import { Text, Button } from "@chakra-ui/react"
import Link from 'next/link'
import styles from '../styles/post.module.scss'
import Posts from '../components/posts'

export async function getServerSideProps({ query }) {
  const postData = await getPost("posts", parseInt(query.id.toString()))
  const postsData = await getPostsCollection("posts", parseInt(query.id.toString()))
  if (Number(query.id)) {
    return {
      props: { postData, postsData }
    }
  } else
    return { notFound: true }


}

export interface PostProps {
  postData: iPost,
  postsData: iPost[]
}

export default function Post({ postData, postsData }: PostProps) {
  return (
    <div className={styles.page}>
      <div className={styles.containerPost}>
        <Text
          fontWeight="bold"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600">{postData.title}</Text>
        <Text
          fontSize="md"
          letterSpacing="wide"
          color="teal.900">{postData.body}</Text>
      </div>
      {postsData.length > 0 ?
        <div className={styles.container}>
          <Text size="lg" color="blue.300">Você pode se interessar também por:</Text>
          <Posts postsData={postsData}></Posts>
        </div>
        :
        <div className={styles.container}>
          <Text size="lg" color="gray">Sem recomendações para este post!</Text>
          <Link href="\">
            <Button>Voltar para a tela inicial</Button>
          </Link>
        </div>
      }
    </div>
  )
}