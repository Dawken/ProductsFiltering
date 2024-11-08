import React from 'react'
import useSortBy from './useSortBy'
import { Props } from './sortBy.types'

const SortBy = ({ sortOption, setSortOption }: Props) => {
    const { handleSortChange } = useSortBy({ setSortOption })
    return (
        <div className='w-full flex flex-col'>
            <span className='font-bold text-lg'> Sortuj Po:</span>
            <select
                className='border-white outline-none border h-9 px-2 w-full max-w-[249px]'
                onChange={handleSortChange}
                value={sortOption}
            >
                <option value='wszystkie'>Wszystkie</option>
                <option value='cena'>Cena</option>
                <option value='pojemność'>Pojemność</option>
            </select>
        </div>
    )
}

export default SortBy
