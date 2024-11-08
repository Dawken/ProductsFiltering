import { ChangeEvent } from 'react'
import { HookProps } from './capacity.types'

const useCapacity = ({ setCapacity }: HookProps) => {
    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value

        setCapacity(selectedOption)
    }
    return {
        handleSortChange,
    }
}

export default useCapacity
