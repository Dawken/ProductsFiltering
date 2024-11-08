import { ChangeEvent } from 'react'
import { HookProps } from './features.types'
import { FeatureEnum } from '../../../../../types/filtering/featureEnum'

const useFeatures = ({ setFeatureFilter }: HookProps) => {
    const isFeatureFilter = (value: string): value is FeatureEnum => {
        return (
            value === 'wszystkie' ||
            Object.values(FeatureEnum).some((feature) => feature === value)
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
