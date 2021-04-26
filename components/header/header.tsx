import { Image, Button } from '@chakra-ui/react'
import Link from 'next/link'
import styles from './header.module.scss'

const routes = [
  { path: "/", label: "Início" },
]
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Image sizes="64px" src="https://via.placeholder.com/64" alt="Foto de perfil" />
        </div>
        <nav>
          <ul>{routes.map(({ path, label }, idx) => (
            <li key={idx}>
              <Link href={path}>
                <Button>{label}</Button>
              </Link>
            </li>
          ))}</ul>
        </nav>
      </div>
    </header>
  )
}