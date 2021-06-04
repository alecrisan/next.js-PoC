import Link from 'next/link'
import useSwr from "swr";
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index({ staticMovies }) {
  const { data: movies, error } = useSwr('/api/movie', fetcher, { initialData: staticMovies })
  return (
    <Layout>
      <h1>Movies</h1>
      {!(movies || error) && (
        <div>Loading...</div>
      )}
      {error && (
        <div>Failed to load movies</div>
      )}
      {movies && (
        <div>
          {movies.map(movie => (
            <div key={movie.id}  className={utilStyles.card}>
              <Link href={`/movies/${movie.id}`}>
                <a><em>{movie.title}</em></a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  let staticMovies = null;
  try {
    staticMovies = await fetcher('api/movie')
  } catch (err) {
  }
  return {
    props: {
        staticMovies,
    }
  }
}
