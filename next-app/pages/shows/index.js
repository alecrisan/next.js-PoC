import Link from 'next/link'
import useSwr from "swr";
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index({ staticShows }) {
  const { data: shows, error } = useSwr('/api/show', fetcher, { initialData: staticShows })
  return (
    <Layout>
      <h1>Shows</h1>
      {!(shows || error) && (
        <div>Loading...</div>
      )}
      {error && (
        <div>Failed to load shows</div>
      )}
      {shows && (
        <div>
          {shows.map(show => (
            <div key={show.id} className={utilStyles.card}>
              <Link href={`/shows/${show.id}`}>
                <a><em>{show.title}</em></a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  let staticShows = null;
  try {
    staticShows = await fetcher('api/show')
  } catch (err) {
  }
  return {
    props: {
        staticShows,
    }
  }
}
