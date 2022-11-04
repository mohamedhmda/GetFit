import React from 'react'
import H1IMG from '../../images/header/header-1.png'
import H2IMG from '../../images/header/header-2.png'
import H3IMG from '../../images/header/header-3.png'

const Images = () => {
  return (
    <div className='grid grid-cols-3 gap-1 md:gap-2 lg:gap-4'>
      <div className='pt-10 relative'>
        <img src={H1IMG} className='rounded-md shadow-md' alt="header" />
        <div 
          className=' text-center 
                      bg-gradient-to-br from-white/60 to-white/10 rounded-xl backdrop-blur-lg 
                      py-5 px-11
                      absolute top-2/4 left-1/3
                      z-10
                      italic
                      hidden lg:block
                      '
        >
          <p>Competetive<br />pricing</p>
        </div>
      </div>

      <div className='relative'>
        <img src={H2IMG} className='rounded-md shadow-md' alt="header" />
        <div 
          className=' text-center 
                      bg-gradient-to-br from-white/60 to-white/10 rounded-xl backdrop-blur-lg 
                      py-5 px-11
                      absolute -left-1/3 -top-4
                      z-10
                      italic
                      hidden lg:block
                      '
        >
          <p>Professional<br />trainers</p>
        </div>
      </div>

      <div className='pt-10 relative'>
        <img src={H3IMG} className='rounded-md shadow-md' alt="header" />
        <div 
          className=' text-center 
                      bg-gradient-to-br from-white/60 to-white/10 rounded-xl backdrop-blur-lg 
                      py-5 px-11
                      absolute -left-1/2 -bottom-4
                      z-10
                      italic
                      hidden lg:block
                      '
        >
          <p>Edging technologie<br />machines</p>
        </div>
      </div>
    </div>
  )
}

export default Images