import styled from 'styled-components'
import Link from 'next/link'
import { MovieKind, Movie } from '../shared/movie'
import Rating from '../components/rating'
import { StarIcon } from './icons'
import { ReactNode, useCallback } from 'react'
import { rateMovie } from '../api/rate-movie'

const Table = styled.table`
    display: flex;
    flex-direction: column;
`

const TableData = styled.td`
    padding: 8px;
`

const MovieTableData = styled.td`
    min-width: 50px;
`
const MovieImage = styled.img`
    width: 100%;
`

const MovieTitleLink = styled.a`
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const MovieYear = styled.span`
    font-size: 14px;
`

type Props = {
    movies: Movie[]
}

export default function MoviesTable({ movies = [] }: Props) {
    const renderStar = useCallback(
        ({ active }: { active: boolean }) => (
            <StarIcon fill={active ? '#FDA50F' : 'none'} color="#FDA50F" />
        ),
        []
    )

    const onStarClick = useCallback(
        (movie: Movie) => async (ratingValue: number) => {
            try {
                const { data } = await rateMovie({ id: movie._id, ratingValue })

                const newRating = (data.ratingValue / data.ratingCount).toFixed(1)
                window.alert(
                    `Successfully rated movie: ${data.title} with rating: ${ratingValue}`
                )
            } catch (err) {
                window.alert(
                    `An error occured while trying to rate a ${movie.kind}: ${movie.title}`
                )
            }
        },
        []
    )

    return (
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th>Rank & Title</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, i) => (
                    <tr key={movie._id + i}>
                        <MovieTableData>
                            <MovieImage src={movie.image} alt={movie.title} />
                        </MovieTableData>
                        <TableData>
                            <MovieTitle {...movie} rank={i + 1}>
                                <div>
                                    <Rating
                                        count={5}
                                        renderStar={renderStar}
                                        onClick={onStarClick(movie)}
                                    />
                                </div>
                            </MovieTitle>
                        </TableData>
                        <TableData>
                            <MovieRating {...movie} />
                        </TableData>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

type MovieTitleProps = Movie & {
    rank: number
    children: ReactNode
}

function MovieTitle({ rank, children, ...movie }: MovieTitleProps) {
    const year = new Date(movie.releaseDate).getFullYear()
    const path = movie.kind === MovieKind.MOVIE ? 'movies' : 'series'

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {rank}.
                <Link href={`/${path}/${movie._id}`} passHref>
                    <MovieTitleLink>{movie.title}</MovieTitleLink>
                </Link>
                <MovieYear>({year})</MovieYear>
            </div>
            {children}
        </div>
    )
}

const MovieRatingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        margin-right: 6px;
    }
`

function MovieRating(props: Movie) {
    const rating = props.ratingAvg ?? (props.ratingValue / props.ratingCount).toFixed(1)
    return (
        <MovieRatingWrapper>
            <StarIcon />
            <span>{rating}</span>
        </MovieRatingWrapper>
    )
}
