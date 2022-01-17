import { Schema, model } from 'mongoose'

export type Movie = {
    title: string
    director: string
    cast: string[]
    description: string
    image: string
    releaseDate: Date
    kind: MovieKind
    ratingValue: number
    ratingCount: number
    meta: {
        search: string[]
    }
}

export enum MovieKind {
    MOVIE = 'movie',
    SERIES = 'series'
}

const movieSchema = new Schema<Movie>({
    title: {
        type: String
    },
    director: {
        type: String
    },
    cast: {
        type: [String]
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    kind: {
        type: String
    },
    ratingValue: {
        type: Number
    },
    ratingCount: {
        type: Number
    },
    meta: {
        search: {
            type: String,
            select: false
        }
    }
})

// All textual fields are indexed for text search
movieSchema.index(
    {
        title: 'text',
        actors: 'text',
        director: 'text',
        releaseDate: 'text',
        'meta.search': 'text'
    },
    {
        weights: {
            'meta.search': 20,
            title: 10,
            actors: 5,
            director: 2,
            releaseDate: 1
        }
    }
)

export const MovieModel = model('Movie', movieSchema, 'movie')
