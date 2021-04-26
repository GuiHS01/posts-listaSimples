import { getPosts, iPost } from '../lib/posts'
import styles from '../styles/home.module.scss'
import Post from '../components/posts'

export async function getServerSideProps() {
  const postsData = await getPosts("posts")
  return {
    props: { postsData }
  }
}

export interface PostsProps {
  postsData: iPost[]
}

export default function Home({ postsData }: PostsProps) {
  return (
    <div className={styles.page} >
      <div className={styles.container}>
        <Post postsData={postsData}></Post>
      </div>
    </div >
  )
}
