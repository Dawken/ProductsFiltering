import { FeatureFilter } from '../../../../../types/filtering/featureType'

type HookProps = {
    setFeatureFilter: (data: FeatureFilter) => void
}

type Props = HookProps & {
    featureFilter: FeatureFilter
}

export type { HookProps, Props }
