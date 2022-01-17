import { useCallback, useState } from 'react'

export function useSearch() {
    const [term, setTerm] = useState('')

    const clearTerm = useCallback(() => setTerm(''), [])

    const onTermChange = useCallback((e) => setTerm(e.target.value), [])

    return { term, clearTerm, onTermChange }
}
