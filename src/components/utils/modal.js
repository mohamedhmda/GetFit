import React from 'react'
import CLOSE from '../../images/x.svg'

const Modal = ( {component, setState} ) => {
  return (
    <div className='z-40 bg-black/10 fixed top-0 left-0 w-screen h-screen'>
        <div className='m-auto my-24 z-50 bg-white w-3/4 h-3/4 p-8 relative'>
            <button
                className='text-black font-bold absolute top-3 right-3'
                onClick={setState} 
            >
                <img src={CLOSE} alt='close button' />
            </button>
            {component}
        </div>
    </div>
  )
}

export default Modal