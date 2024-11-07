import React from 'react'
import { WashingMachineType } from '../../../washingMachinesData'
import CardPrice from './cardPrice/cardPrice'
import CardInformation from './cardInformation/cardInformation'

const WashingMachineCard = ({
    washingMachine,
}: {
    washingMachine: WashingMachineType
}) => {
    const {
        model,
        type,
        capacity,
        color,
        dimensions,
        features,
        energyClass,
        availability,
        price,
        monthlyInstallment,
        available,
    } = washingMachine

    return (
        <div className='flex flex-col items-center bg-white rounded-[20px] p-[24px] gap-[10px]'>
            <img
                src={'/washingMachine.png'}
                width={200}
                height={200}
                alt='Zdjęcię pralki'
            />
            <div className='flex flex-col gap-[14px] text-[12px] text-[#767676] w-[290px]'>
                <div className='flex flex-col gap-[29px]'>
                    <CardInformation
                        model={model}
                        type={type}
                        capacity={capacity}
                        color={color}
                        dimensions={dimensions}
                        features={features}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    Klasa energetyczna
                    <div className='[clip-path:polygon(0_0,85%_0,100%_50%,85%_100%,0_100%)] bg-[#009949] w-[49px] h-[18px]'>
                        <p className='text-white ml-2'>{energyClass}</p>
                    </div>
                </div>
                <CardPrice
                    availability={availability}
                    price={price}
                    monthlyInstallment={monthlyInstallment}
                    available={available}
                />
            </div>
        </div>
    )
}
export default WashingMachineCard
