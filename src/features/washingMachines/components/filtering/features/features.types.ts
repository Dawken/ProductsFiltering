import { FeatureEnum } from '../../../../../types/filtering/featureEnum'

type HookProps = {
    setFeatureFilter: (data: FeatureEnum | 'wszystkie') => void
}

type Props = HookProps & {
    featureFilter: FeatureEnum | 'wszystkie'
}

export type { HookProps, Props }
