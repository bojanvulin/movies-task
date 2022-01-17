import { searchMovies } from '../api/search-movies'
import { Movie, MovieKind } from '../shared/movie'
import { useFetch } from './use-fetch'

type Options = {
    kind: MovieKind
    term: string
    initialState: Movie[]
}

export function useMovieSearch({ kind, term, initialState }: Options) {
    // We could use a debounce here for optimization
    const { data } = useFetch(
        async () => {
            const res = await searchMovies({
                kind,
                term,
                limit: 10
            })
            return res.data
        },
        {
            initialState,
            deps: [term],
            condition: term.length >= 2
        }
    )

    return { data }
}
