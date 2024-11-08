import { ChangeEvent, useState } from 'react'
import { Props } from './filtering.types'

const useFiltering = ({
    washingMachines,
    setFilteredWashingMachines,
}: Props) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = event.target.value.toLowerCase()
        setSearchTerm(newSearchTerm)

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

            return machineString.includes(newSearchTerm)
        })
        setFilteredWashingMachines(filteredMachines)
    }
    return {
        searchTerm,
        handleSearchChange,
    }
}

export default useFiltering
