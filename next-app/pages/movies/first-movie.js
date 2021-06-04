import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstMovie() {
  return (
    <Layout>
      <Head>
        <title>First Movie</title>
      </Head>
      <h1>First Movie</h1>
      <Image
        src="/images/mammamia.jpg" // Route of the image file
        height={445} // Desired size with correct aspect ratio
        width={300} // Desired size with correct aspect ratio
        alt="Mamma Mia"
        />
    </Layout>
  )
}