import styles from './header.module.scss'

function Header(){
  return (
    <div className={styles.header}>
      <nav>
        <a href="/about">Sobre Mim</a>
      </nav>
    </div>
  )
}

export default Header
