export type Response<T> = Promise<{ data: T }>

export enum MovieOrder {
    ASC = 'asc',
    DESC = 'desc'
}
