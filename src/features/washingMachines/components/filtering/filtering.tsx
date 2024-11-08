import React from 'react'
import { Props } from './filtering.types'
import useFiltering from './useFiltering'

const Filtering = ({ washingMachines, setFilteredWashingMachines }: Props) => {
    const { searchTerm, handleSearchChange } = useFiltering({
        washingMachines,
        setFilteredWashingMachines,
    })

    return (
        <div className='p-6'>
            <input
                className='w-[225px] px-3 h-[40px] border-none outline-none text-sm'
                type='text'
                placeholder='Szukaj...'
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Filtering
