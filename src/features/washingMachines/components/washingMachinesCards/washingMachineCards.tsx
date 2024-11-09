import React from 'react'
import { Props } from './washingMachines.types'
import WashingMachineCard from './washingMachineCard/washingMachineCard'
import useWashingMachinesCards from './useWashingMachinesCards'

const WashingMachinesCards = ({ washingMachines }: Props) => {
    const { handleShowMore, visibleWashingMachines } = useWashingMachinesCards({
        washingMachines,
    })

    return (
        <>
            <section className='w-full pb-6 gap-y-4 gap-x-1 h-fit min-h-full items-center grid grid-cols-[repeat(auto-fill,_minmax(338px,1fr))] grid-rows-2 justify-center justify-items-center align-items-center'>
                {visibleWashingMachines.map((washingMachine, index) => (
                    <WashingMachineCard
                        washingMachine={washingMachine}
                        key={index}
                    />
                ))}
            </section>
            {visibleWashingMachines.length > 0 &&
            visibleWashingMachines.length < washingMachines.length ? (
                <button
                    className='flex items-center gap-2 text-lg text-[#007AFF] font-bold'
                    onClick={handleShowMore}
                >
                    Pokaż więcej
                    <div className='[clip-path:polygon(50%_100%,0_0,100%_0)] size-[7px] bg-[#007AFF]'></div>
                </button>
            ) : (
                <div>Nie znaleziono więcej wyników</div>
            )}
        </>
    )
}

export default WashingMachinesCards
