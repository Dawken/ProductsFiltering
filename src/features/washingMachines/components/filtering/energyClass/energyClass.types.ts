import { EnergyClassEnum } from '../../../../../types/filtering/energyClassEnum'

type HookProps = {
    setEnergyClass: (data: EnergyClassEnum | 'wszystkie') => void
}

type Props = HookProps & {
    energyClass: EnergyClassEnum | 'wszystkie'
}

export type { HookProps, Props }
