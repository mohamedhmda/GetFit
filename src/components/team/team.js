import React from 'react'
import TEAM1 from '../../images/team/team-1.png'
import TEAM2 from '../../images/team/team-2.png'
import TEAM3 from '../../images/team/team-3.png'

const Team = () => {
  return (
    <div className='bg-theme-1' id='Trainers'>
        <div className='w-full md:w-4/5 mx-auto  py-24'>
            <h1 className='text-4xl font-bold text-center'>Meet our <span className='text-theme-2'>Trainers</span></h1>
            <p className='text-xl font-light text-center italic'>Professional trainers to help you in your gym journey</p>

            <div className='grid md:grid-cols-3 gap-4 my-8'>
                <div className='mx-auto'>
                    <img src={TEAM1} className='rounded-md' alt="our trainers" />
                    <div className='text-center my-4'>
                        <h3 className='text-xl font-bold'>Alexander Smith</h3>
                        <p className='text-base font-light italic'>Gym trainer</p>
                    </div>
                </div>
                <div className='md:mt-5 mx-auto'>
                    <img src={TEAM2} className='rounded-md' alt="our trainers" />
                    <div className='text-center my-4'>
                        <h3 className='text-xl font-bold'>Alexander Smith</h3>
                        <p className='text-base font-light italic'>Gym trainer</p>
                    </div>
                </div>
                <div className='md:mt-10 mx-auto'>
                    <img src={TEAM3} className='rounded-md' alt="our trainers" />
                    <div className='text-center my-4'>
                        <h3 className='text-xl font-bold'>Alexander Smith</h3>
                        <p className='text-base font-light italic'>Gym trainer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team