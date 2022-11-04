import React from 'react'
import Button from '../utils/button'

const Plan = ( {plan} ) => {
  return (
    <div className={`${plan.color} w-80 lg:w-full p-5 lg:p-12 rounded-lg mx-auto`}>
        <div className={`text-left ${plan.textcolor}`}>
            <h1 className='text-2xl font-bold'>{plan.title}</h1>
            <p className='text-sm font-light italic mt-1'>{plan.description}</p>
            <h1 className='text-5xl font-bold my-6'>{plan.price}</h1>
            <ul className='grid grid-cols-1 gap-2'>
                {
                    plan.features.map((feature, index) => (
                        <li key={index} className='flex flex-row'>
                            <img src={plan.circle} className='mr-3' alt="circle check" />
                            {feature}
                        </li>
                    ))
                }
            </ul>
            <div className='mt-6 flex justify-center text-inherit'>
                <Button text="Enroll now" bgcolor="bg-theme-2" textcolor="text-theme-4" />
            </div>
        </div>
    </div>
  )
}

export default Plan