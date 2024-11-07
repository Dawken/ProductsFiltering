import { useState } from 'react'
import { Props } from './washingMachines.types'

const useWashingMachinesCards = ({ washingMachines }: Props) => {
    const [visibleItems, setVisibleItems] = useState(6)

    const handleShowMore = () => {
        setVisibleItems((prevItems) => prevItems + 3)
    }

    const visibleWashingMachines = washingMachines.slice(0, visibleItems)
    return {
        handleShowMore,
        visibleWashingMachines,
    }
}

export default useWashingMachinesCards
