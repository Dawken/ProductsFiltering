import { ChangeEvent, useState } from 'react'
import { HookProps } from './filtering.types'
import { WashingMachineType } from '../../washingMachinesData'

const useFiltering = ({
    washingMachines,
    setFilteredWashingMachines,
}: HookProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortOption, setSortOption] = useState('wszystkie')

    const sortWashingMachines = (
        machines: WashingMachineType[],
        option: string
    ) => {
        const sortedMachines = [...machines]
        if (option === 'cena') {
            sortedMachines.sort((a, b) => a.price - b.price)
        } else if (option === 'pojemność') {
            sortedMachines.sort(
                (a, b) => parseFloat(a.capacity) - parseFloat(b.capacity)
            )
        }
        return sortedMachines
    }

    const applyFilterAndSort = (searchValue: string, sortValue: string) => {
        const filteredMachines = washingMachines.filter((machine) => {
            const machineString = `
                ${machine.model} 
                ${machine.type} 
                ${machine.capacity} 
                ${machine.color} 
                ${machine.dimensions} 
                ${machine.features.join(' ')} 
                ${machine.price} 
                ${machine.monthlyInstallment} 
                ${machine.energyClass} 
                ${machine.availability.join(' ')} 
                ${machine.available ? 'dostępna' : 'niedostępna'}
            `.toLowerCase()
            return machineString.includes(searchValue)
        })

        const sortedAndFilteredMachines =
            sortValue === 'wszystkie'
                ? filteredMachines
                : sortWashingMachines(filteredMachines, sortValue)
        setFilteredWashingMachines(sortedAndFilteredMachines)
    }

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value.toLowerCase()
        setSearchTerm(newSearchTerm)
        applyFilterAndSort(newSearchTerm, sortOption)
    }

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value
        setSortOption(selectedOption)
        applyFilterAndSort(searchTerm, selectedOption)
    }
    return {
        searchTerm,
        handleSearchChange,
        handleSortChange,
        sortOption,
    }
}

export default useFiltering
