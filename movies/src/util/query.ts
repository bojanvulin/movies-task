import { Query } from 'mongoose'

type MongooseQuery = Query<any[], any, {}, any>

export type Paginatable = {
    page: number
    perPage: number
}

export function withPaginationQuery(query: MongooseQuery, options: Paginatable) {
    const page = Math.max(1, options.page)
    const perPage = Math.max(0, options.perPage)
    return query.skip((page - 1) * perPage).limit(perPage)
}

export type Sortable = {
    sortBy: string
    order?: 'asc' | 'desc'
}

export function withSortQuery(
    query: MongooseQuery,
    options: {
        sortBy?: string
        order?: 'asc' | 'desc'
    }
) {
    const { sortBy, order = 'asc' } = options
    return sortBy ? query.sort({ [sortBy]: order }) : query
}
