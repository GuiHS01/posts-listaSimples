import Link from 'next/link'
import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import style from './Posts.module.scss'


export default function Posts({ postsData }) {
  return (
    <ul className={style.lista}>
      <SimpleGrid columns={[1, 1, 3, 4]} spacing="40px">
        {postsData.map(({ title, id }) => (
          <Link href={{ pathname: '/post', query: { id } }} key={id}>
            <a>
              <li>
                <Heading as='h2'>{title}</Heading>
                <Text fontSize="md" color="blue.500" align="end">Clique para ler mais</Text>
              </li>
            </a>
          </Link>
        ))}
      </SimpleGrid>
    </ul>
  )
}