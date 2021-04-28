import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>

    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>

    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugit sit quisquam nobis aliquam at molestias totam odit earum repellat tempora a accusantium, ipsa mollitia. Iure unde maxime sed amet quod hic dicta consequuntur at, quisquam a repellendus temporibus cum repudiandae voluptatum nemo dolorem voluptates libero harum dolore nulla ipsum?</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugit sit quisquam nobis aliquam at molestias totam odit earum repellat tempora a accusantium, ipsa mollitia. Iure unde maxime sed amet quod hic dicta consequuntur at, quisquam a repellendus temporibus cum repudiandae voluptatum nemo dolorem voluptates libero harum dolore nulla ipsum?</p>
      
      <Link href="/ninjas">
        <a className={styles.btn} href="">See Ninja Listing</a>
      </Link>
    </div>

    </>
  )
}
