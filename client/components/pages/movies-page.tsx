import { useMovieSearch } from '../../hooks/use-movie-search'
import { useMovies } from '../../hooks/use-movies'
import { useSearch } from '../../hooks/use-search'
import { Movie, MovieKind } from '../../shared/movie'
import Header from '../header'
import MoviesTable from '../movie-table'
import SearchInput from '../search-input'

type Props = {
    kind: MovieKind
    initialMovies?: Movie[]
}

export default function MoviesPage({ kind, initialMovies = [] }: Props) {
    const { term, clearTerm, onTermChange } = useSearch()
    const { movies, loadMoreMovies } = useMovies({
        kind,
        perPage: 10,
        initialState: initialMovies || []
    })
    const { data: searchedMovies } = useMovieSearch({ kind, term, initialState: [] })

    return (
        <main>
            <Header />
            <form>
                <SearchInput value={term} onChange={onTermChange} onClear={clearTerm} />
            </form>
            <MoviesTable movies={term ? searchedMovies : movies} />
            {!term && <button onClick={loadMoreMovies}>Load more</button>}
        </main>
    )
}
