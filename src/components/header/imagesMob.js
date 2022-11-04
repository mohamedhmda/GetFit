import React, { useState } from 'react'
import { motion } from "framer-motion";
import { wrap } from "popmotion";

import { images } from './data'

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ImagesMob = () => {
const [[page, direction], setPage] = useState([0, 0]);
const imageIndex = wrap(0, images.length, page);
const paginate = (newDirection) => {
  setPage([page + newDirection, newDirection]);
};
  return (
    <motion.div className='grid grid-cols-4 gap-2 my-12' >
        <motion.div className={`my-auto h-3/4 overflow-hidden`} onClick={() => paginate(-1)}>
            <motion.img 
              src={images[wrap(0, images.length, imageIndex-1)]} 
              className='object-none rounded-md shadow-md h-full brightness-50 opacity-50' 
              alt="header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity:0 }}
              />
        </motion.div>
        <motion.div className='col-span-2'>
            <motion.img 
              src={images[imageIndex]} 
              className='rounded-md shadow-md w-full z-20' 
              alt="header" 
              custom={direction}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity:0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
    
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              />
        </motion.div>
        <motion.div className='my-auto h-3/4' onClick={() => paginate(1)}>
            <motion.img 
              src={images[wrap(0, images.length, imageIndex+1)]} 
              className='object-none rounded-md shadow-md h-full brightness-50 opacity-50 z-10' 
              alt="header" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity:0 }}
              />
        </motion.div>
    </motion.div>
  )
}

export default ImagesMob