import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from "popmotion";

import Testimonial from './testimonial'
import { testimonials } from './data'

const Testimonials = () => {
    const initialState = [true, false, false]
    const [[left, center, right], setActive] = useState(initialState)
    const [[Content, Direction], setContet] = useState([0, 0])

    const toggleOpen = (index) => {
        const activeTab = [false, false, false]
        activeTab[index] = true
        setActive(activeTab)
        
        const newDirection = index > Content ? 1 : -1

        setContet([index, newDirection])
    }
    const paginate = (newDirection) => {
        
        const newContent = wrap(0, testimonials.length, Content+newDirection)
        const activeTab = [false, false, false]
        activeTab[newContent] = true
        setContet([newContent, newDirection]);
        setActive(activeTab)
      };
  return (
    <div className='bg-theme-1' id='Testimonials'>
        <div className='w-full px-2 md:w-4/5 mx-auto  py-24'>
            <div className='flex flex-col'>
                <h1 className='text-2xl xl:text-4xl font-bold my-8 mx-auto text-center'>What happy clients say <br />about GymFit</h1>
                <AnimatePresence custom={Content}>
                    <Testimonial testimonial={testimonials[Content]} paginate={paginate} direction={Direction} />
                </AnimatePresence>
                <motion.div layout className='flex flex-row space-x-2 p-2 justify-center mt-2'>
                    <motion.span layout className={` ${left ? "w-8 bg-white" : "w-3 bg-gray-500"} h-3 rounded-full cursor-pointer`} onClick={() => toggleOpen(0)}></motion.span>
                    <motion.span layout className={` ${center ? "w-8 bg-white" : "w-3 bg-gray-500"} h-3 rounded-full cursor-pointer`} onClick={() => toggleOpen(1)}></motion.span>
                    <motion.span layout className={` ${right ? "w-8 bg-white" : "w-3 bg-gray-500"} h-3 rounded-full cursor-pointer`} onClick={() => toggleOpen(2)}></motion.span>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials