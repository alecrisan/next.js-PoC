import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <div className="container">
            <main>
              <p className="description">
                Get started by browsing the most popular movies and TV shows
              </p>

              <div className="grid">
                <a href="" className={utilStyles.card}>
                    <Link href={`/movies`}>
                      <h3>Movies &rarr;</h3>
                    </Link>
                    <p>Discover the latest and most popular movies!</p>
                </a>

                <a href="" className={utilStyles.card}>
                    <Link href={`/shows`}>
                      <h3>Shows &rarr;</h3>
                    </Link>
                    <p>Don't miss the most watched series of this year!</p>
                </a>
               
              </div>
            </main>
            <footer>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
              </a>
            </footer>

            <style jsx>{`

              main {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              footer img {
                margin-left: 0.5rem;
              }

              footer a {
                display: flex;
                justify-content: center;
                align-items: center;
              }

              a {
                color: inherit;
                text-decoration: none;
              }

              .title a {
                color: #0070f3;
                text-decoration: none;
              }

              .title a:hover,
              .title a:focus,
              .title a:active {
                text-decoration: underline;
              }

              .title {
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
              }

              .title,
              .description {
                text-align: center;
              }

              .description {
                line-height: 1.5;
                font-size: 1.5rem;
              }

              code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                  DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
              }

              .grid {
                display: contents;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;

                max-width: 800px;
                margin-top: 3rem;
              }

              .logo {
                height: 1em;
              }

              @media (max-width: 600px) {
                .grid {
                  width: 100%;
                  flex-direction: column;
                }
              }
            `}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                  sans-serif;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
          </div>
    </Layout>   
  )
}
