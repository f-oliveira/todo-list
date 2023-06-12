import Link from 'next/link';
import styles from '../header/styles.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/" >
            <h1 className={styles.logo}>Tarefas</h1>
          </Link>

          <Link href="/dashboard" className={styles.link}>
            Meu Painel
          </Link>
        </nav>
      </section>
    </header>
  );
}