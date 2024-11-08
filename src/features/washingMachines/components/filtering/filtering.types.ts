import { WashingMachineType } from '../../washingMachinesData'

type HookProps = {
    washingMachines: WashingMachineType[]
    setFilteredWashingMachines: (data: WashingMachineType[]) => void
}

type Props = HookProps & {
    filteredWashingMachines: WashingMachineType[]
}

export type { Props, HookProps }
