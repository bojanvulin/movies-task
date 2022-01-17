import type { NextPage } from 'next'
import Head from 'next/head'
import { getTopMovies } from '../../api/get-top-movies'
import { MovieKind, Movie } from '../../shared/movie'
import MoviesPage from '../../components/pages/movies-page'

export async function getStaticProps() {
    const { data } = await getTopMovies({ kind: MovieKind.SERIES, limit: 10 })
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
                <title>IMDB - Series</title>
                <meta name="description" content="IMDB series" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoviesPage kind={MovieKind.SERIES} initialMovies={topMovies} />
        </>
    )
}

export default Page
