import React from 'react'
import { Props } from './washingMachines.types'
import WashingMachineCard from './washingMachineCard/washingMachineCard'

const WashingMachinesCards = ({ washingMachines }: Props) => {
    return (
        <section className='flex flex-wrap p-20 gap-5 justify-center'>
            {washingMachines.map((washingMachine, index) => (
                <WashingMachineCard
                    washingMachine={washingMachine}
                    key={index}
                />
            ))}
        </section>
    )
}

export default WashingMachinesCards
