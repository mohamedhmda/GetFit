import React from 'react'
import Contact from '../contact/contact'
import Button from '../utils/button'
import Modal from '../utils/modal'
import Images from './images'
import ImagesMob from './imagesMob'

const Header = ( {modal, setmodal} ) => {
  return (
    <div id="Home" className='w-full md:w-4/5 mx-auto my-24'>

        <div className='md:flex flex-row justify-between max-md:text-center'>
            <div className='space-y-4 my-auto'>
                <h3 className='text-xl font-light underline underline-offset-4'>Get fit</h3>
                <h1 className='text-5xl font-bold'>Get confident</h1>
                <p className='text-xl font-light italic'>
                    seize the opportunity!<br className='md:hidden'/> 
                    its time to get in <br className='hidden md:block' />
                    the best <br className='md:hidden' />shape of your life.
                </p>
                <Button text="Contact us" bgcolor="bg-theme-4" textcolor="text-theme-1" callback={setmodal} />
            </div>
            
            <div className='hidden md:block lg:basis-1/2'>
                <Images />
            </div>
            <div className='md:hidden'>
                <ImagesMob />
            </div>
                
        </div>
        {
            modal &&
            <Modal component={<Contact />} setState={setmodal} />
        }

    </div>
  )
}

export default Header