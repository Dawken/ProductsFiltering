import React from 'react'
import useCapacity from './useCapacity'
import { Props } from './capacity.types'

const Capacity = ({ capacity, setCapacity }: Props) => {
    const { handleSortChange } = useCapacity({ setCapacity })
    return (
        <div className='md:max-w-[249px] w-full flex flex-col'>
            <span className='font-bold text-lg'>Pojemność:</span>
            <select
                className='border-white outline-none border h-9 px-2 w-full'
                onChange={handleSortChange}
                value={capacity}
            >
                <option value='wszystkie'>wszystkie</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10.5'>10.5</option>
            </select>
        </div>
    )
}

export default Capacity
