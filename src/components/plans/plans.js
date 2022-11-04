import React from 'react'
import Plan from './plan'
import { beginer, professional, athlete } from './data'

const Plans = () => {
  return (
    <div className='w-full md:w-4/5 mx-auto my-24' id='Prices'>
        <div className='text-center'>
            <h1 className='text-2xl underline underline-offset-4'>Plans</h1>
            <p className='text-2xl font-light italic my-4'>
                Join our <span className='font-bold'>membership</span>,<br />
                and start right away.
            </p>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {/* Beginer */}
                <Plan plan={beginer} />

                {/* professional */}
                <Plan plan={professional} />

                {/* athlete */}
                <Plan plan={athlete} />
            </div>
        </div>
    </div>
  )
}

export default Plans