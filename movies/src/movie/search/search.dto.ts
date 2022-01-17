import { GetTopMoviesDto } from '../top/top.dto'

export type SearchMoviesDto = GetTopMoviesDto & {
    term: string
}
