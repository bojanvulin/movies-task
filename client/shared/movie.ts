export type ObjectId = string

export enum MovieKind {
    MOVIE = 'movie',
    SERIES = 'series'
}

export type Movie = {
    _id: ObjectId
    title: string
    director: string
    actors: string[]
    description: string
    image: string
    releaseDate: Date
    kind: MovieKind
    ratingValue: number
    ratingCount: number
    ratingAvg?: number
}
