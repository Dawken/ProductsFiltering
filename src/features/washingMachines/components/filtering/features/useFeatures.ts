import { ChangeEvent } from 'react'
import { FeatureFilter } from '../../../../../types/filtering/featureType'
import { Feature } from '../../../washingMachinesData'
import { HookProps } from './features.types'

const useFeatures = ({ setFeatureFilter }: HookProps) => {
    const isFeatureFilter = (value: string): value is FeatureFilter => {
        return (
            value === 'wszystkie' ||
            Object.values(Feature).some((feature) => feature === value)
        )
    }

    const handleFeatureChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedFeature = event.target.value

        if (isFeatureFilter(selectedFeature)) {
            setFeatureFilter(selectedFeature)
        }
    }
    return {
        handleFeatureChange,
    }
}

export default useFeatures
