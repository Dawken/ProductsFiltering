import React from 'react'
import { EnergyClassEnum } from '../../../../../types/filtering/energyClassEnum'
import { Props } from './energyClass.types'
import useEnergyClass from './useEnergyClass'

const EnergyClass = ({ energyClass, setEnergyClass }: Props) => {
    const { handleEnergyClassChange } = useEnergyClass({ setEnergyClass })

    return (
        <div className='w-full flex flex-col'>
            <span className='font-bold text-lg'>Klasa energetyczna:</span>
            <select
                onChange={handleEnergyClassChange}
                value={energyClass}
                className='border-white outline-none border h-9 px-2 w-full max-w-[249px] '
            >
                <option value='wszystkie'>Wszystkie</option>
                {Object.values(EnergyClassEnum).map((energyClass) => (
                    <option key={energyClass} value={energyClass}>
                        {energyClass}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default EnergyClass