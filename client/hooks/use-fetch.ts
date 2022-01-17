import { useEffect, useState } from 'react'

export enum FetchStatus {
    INITIAL = 'initial',
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

type Options<T> = {
    initialState: T
    deps?: any[]
    condition?: boolean
}

export function useFetch<T>(fetch: () => Promise<T>, options: Options<T>) {
    const { initialState, deps, condition } = options
    const [data, setData] = useState<T>(initialState)
    const [error, setError] = useState<Error | null>(null)
    const [status, setStatus] = useState(FetchStatus.INITIAL)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setStatus(FetchStatus.LOADING)
                const data = await fetch()
                setData(data)
                setStatus(FetchStatus.SUCCESS)
            } catch (err) {
                setError(err as Error)
                setStatus(FetchStatus.ERROR)
            }
        }
        condition && fetchData()
    }, deps)

    return { data, setData, error, status }
}
