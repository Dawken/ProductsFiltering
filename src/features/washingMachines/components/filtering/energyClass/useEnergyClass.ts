import { ChangeEvent } from 'react'
import { EnergyClassEnum } from '../../../../../types/filtering/energyClassEnum'
import { HookProps } from './energyClass.types'

const useEnergyClass = ({ setEnergyClass }: HookProps) => {
    const isEnergyClasssFilter = (value: string): value is EnergyClassEnum => {
        return (
            value === 'wszystkie' ||
            Object.values(EnergyClassEnum).some((feature) => feature === value)
        )
    }

    const handleEnergyClassChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedFeature = event.target.value

        if (isEnergyClasssFilter(selectedFeature)) {
            setEnergyClass(selectedFeature)
        }
    }
    return {
        handleEnergyClassChange,
    }
}

export default useEnergyClass
