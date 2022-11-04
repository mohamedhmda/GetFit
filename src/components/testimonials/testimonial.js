import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    enter: (direction) => {
        return {
        x: direction > 0 ? 3000 : -3000,
        opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
        zIndex: 0,
        x: direction < 0 ? 3000 : -3000,
        opacity: 0
        };
    }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Testimonial = ( {testimonial, paginate, direction} ) => {
  return (
    <>
        <motion.div 
            key={testimonial}
            className='flex flex-col md:flex-row justify-center items-center'
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
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
        >
            <motion.div className='w-[250px] md:w-70 xl:w-[320px] z-10'>
                <motion.img
                        src={testimonial.img} 
                        className='rounded-3xl w-full' 
                        alt='user testimonial' 
                        />
            </motion.div>
            <motion.div className='  bg-white text-theme-1 
                                py-6 px-6 md:-ml-3 max-sm:-mt-4 md:my-auto
                                rounded-md shadow-md
                                w-[300px] md:w-[400px] xl:w-[520px] h-fit'>
                <p className='font-light xl:text-xl'>
                    {testimonial.comment}
                </p>
                <h3 className='font-bold xl:text-xl xl:pt-4'>{testimonial.name}</h3>
                <p className='font-light italic xl:text-xl'>{testimonial.username}</p>
            </motion.div>
        </motion.div>
    </>
  )
}

export default Testimonial