import useSwr from 'swr'
import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import Image from 'next/image'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

const fetcher = url => fetch(url).then((res) => res.json())

export default function Movie({ ssMovie }) {
  const router = useRouter()
  const { data: movie, error } = useSwr(
    router.query.id ? `/api/movie/${router.query.id}` : null,
    fetcher,
    { initialData: ssMovie },
  )

  return (
    <Layout>
      {!(movie || error) && (
        <div>Loading...</div>
      )}
      {error && (
        <div>Failed to load movie</div>
      )}
      {movie && (
        <div>
          <Head>
            <title>{movie.title}</title>
          </Head>
          <h1 className={utilStyles.headingXl}>{movie.title}</h1>
          <div className={utilStyles.columns}>
            <div className={utilStyles.image}>
              <Image
                  src={movie.image}
                  height={445} 
                  width={300}
                  alt={movie.title}
                  />
            </div>
            <div>
                <p className={utilStyles.headingMd}>Score: {movie.score}</p>
                <h3>Description:</h3>
                <p className={utilStyles.lightText}>{movie.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}