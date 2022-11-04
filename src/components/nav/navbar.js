import React from 'react'
import Desktop from './desktop'
import Mobile from './mobile'

const Navbar = ( { modal, setmodal} ) => {
    const navLinks = ["Trainers", "Prices", "Testimonials"]
  return (
    <>
      <div className='hidden lg:block w-full md:w-4/5 mx-auto px-4 md:py-5'>
          {/* Desktop Nav  */}
          <Desktop links={navLinks} modal={modal} setmodal={setmodal} />
      </div>
      <div className='lg:hidden w-full md:w-4/5 mx-auto px-4 md:py-5'>
          {/* mobile Nav  */}
          <Mobile modal={modal} setmodal={setmodal} />
      </div>
    </>
  )
}

export default Navbar