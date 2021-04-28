import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugit sit quisquam nobis aliquam at molestias totam odit earum repellat tempora a accusantium, ipsa mollitia. Iure unde maxime sed amet quod hic dicta consequuntur at, quisquam a repellendus temporibus cum repudiandae voluptatum nemo dolorem voluptates libero harum dolore nulla ipsum?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fugit sit quisquam nobis aliquam at molestias totam odit earum repellat tempora a accusantium, ipsa mollitia. Iure unde maxime sed amet quod hic dicta consequuntur at, quisquam a repellendus temporibus cum repudiandae voluptatum nemo dolorem voluptates libero harum dolore nulla ipsum?</p>
      
      <Link href="/ninjas">
        <a href="">See Ninja Listing</a>
      </Link>
      
      <Footer />

    </div>
  )
}
