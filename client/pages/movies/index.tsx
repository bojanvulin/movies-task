import type { NextPage } from 'next'
import Head from 'next/head'
import { getTopMovies } from '../../api/get-top-movies'
import { MovieKind, Movie } from '../../shared/movie'
import MoviesPage from '../../components/pages/movies-page'

export async function getStaticProps() {
    const { data } = await getTopMovies({ kind: MovieKind.MOVIE, limit: 10 })
    return {
        props: {
            topMovies: data
        }
    }
}

type Props = {
    topMovies: Movie[]
}

const Page: NextPage<Props> = ({ topMovies }) => {
    return (
        <>
            <Head>
                <title>IMDB - Movies</title>
                <meta name="description" content="IMDB movies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoviesPage kind={MovieKind.MOVIE} initialMovies={topMovies} />
        </>
    )
}

export default Page
