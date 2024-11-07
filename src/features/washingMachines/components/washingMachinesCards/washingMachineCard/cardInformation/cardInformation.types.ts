import { Feature } from '../../../../washingMachinesData'

type Props = {
    model: string
    type: string
    capacity: string
    color: string
    dimensions: string
    features: Feature[]
}

export type { Props }
