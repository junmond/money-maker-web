import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Money Maker</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Money Maker!
        </h1>

        <p className={styles.description}>
          We all love money! 💸 💵 💰
        </p>

        <div className={styles.grid}>
          <a href="/config" className={styles.card}>
            <h3>Configuration &rarr;</h3>
            <p>Get or set some configuration</p>
          </a>

          <a href="/health" className={styles.card}>
            <h3>Health Check &rarr;</h3>
            <p>See if money maker is working</p>
          </a>

          <a href="/log" className={styles.card}>
            <h3>Log Viewer &rarr;</h3>
            <p>Display logs written by money maker while run</p>
          </a>

          <a href="/improvement" className={styles.card}>
            <h3>Improvement &rarr;</h3>
            <p>Request any kind of improvement, comment you written will immediately send to Hyunjun</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Being served by Hyunjun 🧑‍🌾
      </footer>
    </div>
  )
}
