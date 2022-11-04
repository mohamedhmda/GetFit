import React from 'react'
import Button from '../utils/button'
import Modal from '../utils/modal'
import Contact from '../contact/contact'

const Mobile = ( {modal, setmodal} ) => {
  return (
    <div className='w-full inline-flex justify-between h-16'>
        <section className='self-center text-3xl font-semibold'>
            Gym<span className='text-theme-2'>Fit</span>
        </section>
        <section className='self-center'>
            <Button text="Contact us" bgcolor="bg-theme-4" textcolor="text-theme-1" callback={setmodal} />
        </section>
        {
            modal &&
            <Modal component={<Contact />} setState={setmodal} />
        }
    </div>
  )
}

export default Mobile