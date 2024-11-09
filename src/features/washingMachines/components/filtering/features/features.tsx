import React from 'react'
import { Props } from './features.types'
import useFeatures from './useFeatures'
import { FeatureEnum } from '../../../../../types/filtering/featureEnum'

const Features = ({ featureFilter, setFeatureFilter }: Props) => {
    const { handleFeatureChange } = useFeatures({ setFeatureFilter })

    return (
        <div className='md:max-w-[249px] w-full flex flex-col'>
            <span className='font-bold text-lg'>Funkcje:</span>
            <select
                onChange={handleFeatureChange}
                value={featureFilter}
                className='border-white outline-none border h-9 px-2 w-full'
            >
                <option value='wszystkie'>Wszystkie</option>
                {Object.values(FeatureEnum).map((feature) => (
                    <option key={feature} value={feature}>
                        {feature}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Features
