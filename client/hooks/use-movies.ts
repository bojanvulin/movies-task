import { useMemo, useState } from 'react'
import { getMovies } from '../api/get-movies'
import { MovieOrder } from '../api/types'
import { Movie, MovieKind } from '../shared/movie'

type Options = {
    kind: MovieKind
    perPage: number
    initialState: Movie[]
}

export function useMovies({ kind, perPage, initialState }: Options) {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState<Movie[]>(initialState)

    const getMovieAverage = (movie: Movie) => {
        const average = movie.ratingAvg ?? movie.ratingValue / movie.ratingCount
        return parseFloat(average.toFixed(1))
    }

    const sortMovieByRating = (a: Movie, b: Movie) => {
        return getMovieAverage(b) - getMovieAverage(a)
    }

    const loadMoreMovies = async () => {
        const res = await getMovies({
            kind,
            page,
            perPage,
            order: MovieOrder.ASC
        })

        setPage(page + 1)
        setMovies([...movies, ...res.data].sort(sortMovieByRating))
    }

    return {
        page,
        movies,
        loadMoreMovies
    }
}
