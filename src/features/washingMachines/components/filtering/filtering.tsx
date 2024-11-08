import React from 'react'
import { Props } from './filtering.types'
import useFiltering from './useFiltering'

const Filtering = ({
    filteredWashingMachines,
    washingMachines,
    setFilteredWashingMachines,
}: Props) => {
    const { searchTerm, handleSearchChange, handleSortChange, sortOption } =
        useFiltering({
            washingMachines,
            setFilteredWashingMachines,
        })

    return (
        <div className='w-full p-6 flex flex-col items-center gap-2 text-sm'>
            <input
                className='w-[225px] px-3 h-[40px] border-none outline-none'
                type='text'
                placeholder='Szukaj...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className='w-full flex flex-col items-start justify-start gap-2 px-5'>
                <div className='w-full flex flex-col'>
                    <span className='font-bold text-lg'> Sortuj Po:</span>

                    <select
                        className='border-white outline-none border h-9 px-2 w-full max-w-[249px] '
                        onChange={handleSortChange}
                        value={sortOption}
                    >
                        <option value='wszystkie'>Wszystkie</option>
                        <option value='cena'>Cena</option>
                        <option value='pojemność'>Pojemność</option>
                    </select>
                </div>

                <div>Liczba wyników: {filteredWashingMachines.length}</div>
            </div>
        </div>
    )
}

export default Filtering
