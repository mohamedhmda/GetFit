import React from 'react'
import Contact from '../contact/contact'
import Button from '../utils/button'
import Modal from '../utils/modal'

const Desktop = ( {links, modal, setmodal} ) => {
  return (
    <div className='w-full inline-flex justify-between h-16'>
        <section className='self-center text-4xl font-semibold'>
            Gym<span className='text-theme-2'>Fit</span>
        </section>
        <section className='hidden lg:flex justify-center'>
            <ul className='flex flex-row text-xl font-medium space-x-5 self-center'>
                {links.map((link, index) => {
                    return(
                        <li key={index} className='w-fit mx-auto hover:text-theme-2'>
                            <a href={`./#${link}`}>{link}</a>
                        </li>
                    )
                })}
            </ul>
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

export default Desktop