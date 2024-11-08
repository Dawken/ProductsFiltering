import { ChangeEvent } from 'react'
import { SortOption } from '../../../../../types/filtering/sortByType'
import { HookProps } from './sortBy.types'

const useSortBy = ({ setSortOption }: HookProps) => {
    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value

        const isSortOption = (value: string): value is SortOption => {
            return (
                value === 'wszystkie' ||
                value === 'cena' ||
                value === 'pojemność'
            )
        }
        if (isSortOption(selectedOption)) {
            setSortOption(selectedOption)
        }
    }
    return {
        handleSortChange,
    }
}

export default useSortBy
