import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/subscribeButton'
import styles from './home.module.scss'
export default function Home() {
  return (
    <>
    <Head>
          <title>home |   HugoNews</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>.
        </p>
        <SubscribeButton />
      </section>
      <img src="/images/avatar.svg" alt="girl coding" />
    </main>
    </>

  )
}
export const getServerSideProps: GetServerSideProps  = async () => {

  return {
    props:{}
  }
}