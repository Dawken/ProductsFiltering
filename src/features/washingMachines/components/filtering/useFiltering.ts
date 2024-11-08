import { ChangeEvent, useEffect, useState } from 'react'
import { HookProps } from './filtering.types'
import { SortOption } from '../../../../types/filtering/sortByType'
import { EnergyClassEnum } from '../../../../types/filtering/energyClassEnum'
import { FeatureEnum } from '../../../../types/filtering/featureEnum'

const useFiltering = ({
    washingMachines,
    setFilteredWashingMachines,
}: HookProps) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortOption, setSortOption] = useState<SortOption | 'wszystkie'>(
        'wszystkie'
    )
    const [featureFilter, setFeatureFilter] = useState<
        FeatureEnum | 'wszystkie'
    >('wszystkie')
    const [energyClass, setEnergyClass] = useState<
        EnergyClassEnum | 'wszystkie'
    >('wszystkie')

    const applyFiltersAndSort = () => {
        let updatedMachines = [...washingMachines]

        if (searchTerm) {
            updatedMachines = updatedMachines.filter((machine) => {
                const {
                    model,
                    type,
                    capacity,
                    color,
                    dimensions,
                    features,
                    price,
                    monthlyInstallment,
                    energyClass,
                    availability,
                    available,
                } = machine
                const machineString =
                    `${model} ${type} ${capacity} ${color} ${dimensions} ${features.join(
                        ' '
                    )} ${price}  ${monthlyInstallment} ${energyClass} ${availability.join(
                        ' '
                    )} ${available ? 'dostępna' : 'niedostępna'}`.toLowerCase()
                return machineString.includes(searchTerm)
            })
        }

        if (sortOption === 'cena') {
            updatedMachines.sort((a, b) => a.price - b.price)
        } else if (sortOption === 'pojemność') {
            updatedMachines.sort(
                (a, b) => parseFloat(a.capacity) - parseFloat(b.capacity)
            )
        }
        if (featureFilter !== 'wszystkie') {
            updatedMachines = updatedMachines.filter((machine) =>
                machine.features.includes(featureFilter)
            )
        }
        if (energyClass !== 'wszystkie') {
            updatedMachines = updatedMachines.filter((machine) =>
                machine.energyClass.includes(energyClass)
            )
        }

        setFilteredWashingMachines(updatedMachines)
    }

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    useEffect(() => {
        applyFiltersAndSort()
    }, [searchTerm, sortOption, featureFilter, energyClass])

    return {
        searchTerm,
        handleSearchChange,
        sortOption,
        setSortOption,
        featureFilter,
        setFeatureFilter,
        energyClass,
        setEnergyClass,
    }
}

export default useFiltering
