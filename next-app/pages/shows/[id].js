import useSwr from 'swr'
import { useRouter } from 'next/router'
import Layout from '../../components/layout';
import Image from 'next/image'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

const fetcher = url => fetch(url).then((res) => res.json())

export default function Show({ ssShow }) {
  const router = useRouter()
  const { data: show, error } = useSwr(
    router.query.id ? `/api/show/${router.query.id}` : null,
    fetcher,
    { initialData: ssShow },
  )

  return (
    <Layout>
      {!(show || error) && (
        <div>Loading...</div>
      )}
      {error && (
        <div>Failed to load item</div>
      )}
      {show && (
        <div>
          <Head>
            <title>{show.title}</title>
          </Head>
          <h1 className={utilStyles.headingXl}>{show.title}</h1>
          <div className={utilStyles.columns}>
            
          <div className={utilStyles.image}>
            <Image
                src={show.image}
                height={445} 
                width={300}
                alt={show.title}
                />
          </div>
          <div>
            <p className={utilStyles.headingMd}>Score: {show.score}</p>
            <p className={utilStyles.headingMd}>Number of episodes: {show.episodes}</p>
            <h3>Description:</h3>
                <p className={utilStyles.lightText}>{show.description}</p>
          </div>
          </div>             
        </div>
      )}
    </Layout>
  )
}