import React from 'react'
import { Feature } from '../../../washingMachinesData'
import { Props } from './features.types'
import useFeatures from './useFeatures'

const Features = ({ featureFilter, setFeatureFilter }: Props) => {
    const { handleFeatureChange } = useFeatures({ setFeatureFilter })

    const {
        AddWash,
        AIControlPanel,
        InverterMotor,
        ElectronicDisplay,
        TouchDisplay,
    } = Feature
    return (
        <div className='w-full flex flex-col'>
            <span className='font-bold text-lg'>Funkcje:</span>
            <select
                onChange={handleFeatureChange}
                value={featureFilter}
                className='border-white outline-none border h-9 px-2 w-full max-w-[249px] '
            >
                <option value='wszystkie'>Wszystkie</option>
                <option value={AddWash}>{AddWash}</option>
                <option value={AIControlPanel}>{AIControlPanel}</option>
                <option value={InverterMotor}>{InverterMotor}</option>
                <option value={ElectronicDisplay}>{ElectronicDisplay}</option>
                <option value={TouchDisplay}>{TouchDisplay}</option>
            </select>
        </div>
    )
}

export default Features
