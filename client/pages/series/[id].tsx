import type { NextPage } from 'next'
import Head from 'next/head'
import { getMovie } from '../../api/get-movie'
import { getMovies } from '../../api/get-movies'
import { MovieKind, Movie, ObjectId } from '../../shared/movie'
import { MovieOrder } from '../../api/types'
import { getTopMovies } from '../../api/get-top-movies'

// Statically generate top series pages
export async function getStaticPaths() {
    const { data } = await getTopMovies({
        kind: MovieKind.SERIES,
        limit: 10
    })

    const paths = data.map((movie) => ({
        params: { id: movie._id }
    }))

    return { paths, fallback: false }
}

// Pre-render top series and incrementally build others
export async function getStaticProps({ params }: { params: { id: ObjectId } }) {
    const { data } = await getMovie({ id: params.id })
    return {
        props: {
            movie: data
        }
    }
}

type Props = {
    movie: Movie
}

const MoviePage: NextPage<Props> = ({ movie }) => {
    return (
        <>
            <Head>
                <title>IMDB - {movie.title}</title>
                <meta name="description" content={movie.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoviePage movie={movie} />
        </>
    )
}

export default MoviePage
