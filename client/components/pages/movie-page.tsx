import { Movie } from '../../shared/movie'

type Props = {
    movie: Movie
}

export default function MoviePage({ movie }: Props) {
    return (
        <main>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} />
        </main>
    )
}
