import styles from './header.module.scss'
import Link from 'next/link'

function Header(){
  return (
    <div className={styles.header}>
      <Link href="/">GABRIEL VARELA</Link>
      <nav>
        <Link href="/about">Sobre mim</Link>
        <Link href="/about">Blog</Link>
        <a className={styles.dot}> • </a>
        <Link href="https://www.instagram.com/gabrielvrl.dev/">
          <a target="_blank" rel="noreferrer">Instagram</a>
        </Link>
        <Link href="https://www.youtube.com/channel/UC_C9kTkVH6Crykw0WPsSHTA">
        <a  target="_blank" rel="noreferrer">Youtube</a>
        </Link>
        <Link href="https://github.com/gabrielvrl">
        <a target="_blank" rel="noreferrer">Github</a>
        </Link>
      </nav>
    </div>
  )
}

export default Header
