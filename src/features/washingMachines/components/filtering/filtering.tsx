import React from 'react'
import { Props } from './filtering.types'
import useFiltering from './useFiltering'
import SortBy from './sortBy/sortBy'
import Features from './features/features'

const Filtering = ({
    filteredWashingMachines,
    washingMachines,
    setFilteredWashingMachines,
}: Props) => {
    const {
        searchTerm,
        handleSearchChange,
        sortOption,
        setSortOption,
        featureFilter,
        setFeatureFilter,
    } = useFiltering({
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
                <div className='w-full flex'>
                    <SortBy
                        sortOption={sortOption}
                        setSortOption={setSortOption}
                    />
                    <Features
                        featureFilter={featureFilter}
                        setFeatureFilter={setFeatureFilter}
                    />
                </div>

                <div>Liczba wyników: {filteredWashingMachines.length}</div>
            </div>
        </div>
    )
}

export default Filtering
