import Link from 'next/Link';
import { Heading, Button } from '@chakra-ui/react'
import styles from '../styles/notFound.module.scss'
export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Heading as="h1">Pagina não encontrada</Heading>
        <Link href="/">
          <Button>Voltar para a tela inicial</Button>
        </Link>
      </div>
    </div>
  )
}