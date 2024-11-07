import React from 'react'
import { Props } from './cardInformation.types'

const CardInformation = ({
    model,
    type,
    capacity,
    color,
    dimensions,
    features,
}: Props) => {
    return (
        <>
            <header className='font-bold text-lg leading-[22px] text-black'>
                <span>{model}, </span>
                <span>{type}, </span>
                <span>{capacity}, </span>
                <span>{color}</span>
            </header>
            <div className='flex flex-col'>
                <span>
                    {'Pojemność (kg): '}
                    <span className='text-black font-black'>{capacity}</span>
                </span>
                <span>
                    {'Wymiary (GxSxW): '}
                    <span className='text-black font-black'>{dimensions}</span>
                </span>
                <span>
                    {'Funkcje: '}
                    <span className='text-black font-black'>
                        {features.map((feature, index) => (
                            <span key={feature}>
                                {feature}
                                {index < features.length - 1 && ', '}
                            </span>
                        ))}
                    </span>
                </span>
            </div>
        </>
    )
}

export default CardInformation
