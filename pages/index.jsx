import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web dev News</title>
        <meta name='keyword' content='web dev'/>
      </Head>
      <h1>Welcome to home page!</h1>
    </div>
  )
}
