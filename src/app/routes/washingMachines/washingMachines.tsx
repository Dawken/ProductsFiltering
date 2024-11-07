import React from 'react'
import WashingMachinesCards from '../../../features/washingMachines/components/washingMachinesCards/washingMachineCards'
import { washingMachines } from '../../../features/washingMachines/washingMachinesData'

const WashingMachines = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center text-black font-samsungOne  overflow-auto'>
            <h1 className='font-bold text-[40px] leading-[56px]'>
                Wybierz urządzenia
            </h1>
            <div className='flex items-center justify-center w-full bg-[#F8F8F8]'>
                <div className='w-full flex flex-col items-center justify-center max-w-[1220px] py-12'>
                    <WashingMachinesCards washingMachines={washingMachines} />
                </div>
            </div>
        </div>
    )
}
export default WashingMachines
