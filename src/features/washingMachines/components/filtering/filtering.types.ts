import { WashingMachineType } from '../../washingMachinesData'

type Props = {
    washingMachines: WashingMachineType[]
    setFilteredWashingMachines: (data: WashingMachineType[]) => void
}

export type { Props }
