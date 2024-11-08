import React from 'react'
import useSortBy from './useSortBy'
import { Props } from './sortBy.types'

const SortBy = ({ sortOption, setSortOption }: Props) => {
    const { handleSortChange } = useSortBy({ setSortOption })
    return (
        <div className='sm:max-w-[249px] w-full flex flex-col'>
            <span className='font-bold text-lg'> Sortuj Po:</span>
            <select
                className='border-white outline-none border h-9 px-2 w-full'
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
