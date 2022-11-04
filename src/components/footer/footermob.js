import React from 'react'
import MAP from '../../images/footer/map.png'
import MAIL from '../../images/footer/mail.svg'
import MP from '../../images/footer/map-pin.svg'
import PHONE from '../../images/footer/phone.svg'
import FB from '../../images/footer/facebook.svg'
import INS from '../../images/footer/instagram.svg'
import TWT from '../../images/footer/twitter.svg'
import YT from '../../images/footer/youtube.svg'

const Footermob = () => {
  return (
    <div className='w-full md:w-4/5 mx-auto py-24'>
        <h1 className='text-2xl text-center md:text-left md:text-4xl font-bold md:my-3'>Gym<span className='text-theme-3'>Fit</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div className='m-2 md:my-auto'>
                <img className='rounded-md place-self-center border-2 border-white' src={MAP} alt="map" />
            </div>
            <div className='mx-auto my-2 lg:order-last'>
                <ul className='space-y-3 md:space-y-3'>
                    <li className='text-2xl font-bold'>Contact us</li>
                    <li className='font-light flex flex-row'><span className='pr-3'><img src={MAIL} alt='mail icon' /></span> Support@gymfit.com</li>
                    <li className='font-light flex flex-row'>
                        <span className='pr-3 self-center'><img src={MP} alt='mail icon' /></span>
                        3925 Wayside Lane.<br />
                        San Francisco, California 94107
                    </li>
                    <li className='font-light flex flex-row'><span className='pr-3 self-center'><img src={PHONE} alt='mail icon' /></span> (413)787-9118</li>
                </ul>
                <div className='flex flex-row justify-between my-6'>
                    <span className='pr-3 self-center cursor-pointer'><img src={FB} alt='mail icon' /></span>
                    <span className='pr-3 self-center cursor-pointer'><img src={INS} alt='mail icon' /></span>
                    <span className='pr-3 self-center cursor-pointer'><img src={TWT} alt='mail icon' /></span>
                    <span className='pr-3 self-center cursor-pointer'><img src={YT} alt='mail icon' /></span>
                </div>
                <div className='flex flex-col space-y-2'>
                    <p className='text-xl'>Subscribe to email list</p>
                    <form>
                        <input className='p-2 rounded-lg w-full text-theme-1' type='text' placeholder='John@example.com' />
                    </form>
                </div>
            </div>
            <div className='mx-auto my-2 text-center gap-2 grid md:grid-cols-2 md:col-span-2 lg:col-span-1 lg:text-left'>
                <ul className='space-y-2  px-4'>
                    <li className='text-2xl font-bold'>About</li>
                    <li className='font-light'><a href='/'>About us</a></li>
                    <li className='font-light'><a href='/'>Why GymFit?</a></li>
                    <li className='font-light'><a href='/'>Terms & services</a></li>
                </ul>
                <ul className='space-y-2  px-4'>
                    <li className='text-2xl font-bold'>Support</li>
                    <li className='font-light'><a href='/'>FAQ</a></li>
                    <li className='font-light'><a href='/'>Support center</a></li>
                    <li className='font-light'><a href='/'>Contact</a></li>
                    <li className='font-light'><a href='/'>Privacy policy</a></li>
                </ul>
            </div>
        </div>
        <div className='text-center mt-8'>
            <p className='font-light italic'>All rights reserved, 2022 GymFit</p>
        </div>
    </div>
  )
}

export default Footermob