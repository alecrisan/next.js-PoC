import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = ' TVTime'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="og:title" content={siteTitle}/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <div>          
            <h1>
              <Image
              src="/images/tv.png"
              height={40} 
              width={40}
              />
              {siteTitle}
            </h1>
          </div>      
        ) : (
          <h2>
            <Link href="/">
              <a>
                <Image
                src="/images/tv.png"
                height={30} 
                width={30}
                />
                {siteTitle}
              </a>
            </Link>
          </h2>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a className={styles.button}>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
