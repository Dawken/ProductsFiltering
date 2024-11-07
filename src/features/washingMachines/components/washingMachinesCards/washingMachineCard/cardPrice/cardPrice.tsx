import React from 'react'
import { Props } from './cardPrice.types'

const CardPrice = ({
    availability,
    price,
    monthlyInstallment,
    available,
}: Props) => {
    return (
        <>
            <div>
                Cena obowiązuje: {availability[0]} - {availability[1]}
                <div className='flex items-center gap-1 w-fit text-black font-bold'>
                    <span className='text-[40px] leading-10'> {price}</span>
                    <span className='text-sm leading-4 text-right'>
                        00
                        <p>zł</p>
                    </span>
                </div>
            </div>
            <div className='text-[16px] text-[#555555] font-bold'>
                {monthlyInstallment} zł x 60 rat
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-[#1428A0] rounded-3xl w-[150px] h-9 text-sm text-white uppercase'>
                    {available ? 'Wybierz' : 'Niedostępne'}
                </button>
            </div>
        </>
    )
}

export default CardPrice
