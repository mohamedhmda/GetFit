import React from 'react'
import { motion  } from 'framer-motion'

const Button = ( {text, bgcolor, textcolor, callback} ) => {
  return (
    
    <motion.button
      onClick={callback}
      className={`${bgcolor} ${textcolor} text-base font-bold py-3 px-9 rounded-md`}
      whileHover=
          {
              {
                  scale: 1.1,
              }
          }
      whileTap=
          {
              {
                  scale: 0.9,
              }
          }  
    >
        {text}
    </motion.button>
  )
}

export default Button