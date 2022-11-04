import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const handleSubmit = () =>{
        
    }
  return (
    <div className='w-3/4 mx-auto my-6'>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 text-theme-1">
                <label className="block">
                    <span className="text-theme-1 xl:text-lg 2xl:text-2xl">Email *</span>
                    <input type="text"
                        name="email"
                        className='p-2 mt-1 block w-full rounded-md border-2 border-gray-300'
                        placeholder="John@example.com"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700 xl:text-lg 2xl:text-2xl">Object *</span>
                    <input type="text"
                        name="object"
                        className='p-2 mt-1 block w-full rounded-md border-2 border-gray-300'
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700 xl:text-lg 2xl:text-2xl">Subject *</span>
                    <textarea rows="7"
                        name="subject"
                        className='p-2 mt-1 block w-full rounded-md border-2 border-gray-300'
                        placeholder="Type something if you want ..."
                    />
                </label>
                <motion.button
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
                    className="mx-auto w-40 xl:w-60 2xl:w-80 h-12 xl:h-16 2xl:h-20 bg-theme-2 text-white font-bold text-xl 2xl:text-2xl my-2"
                    type="submit"
                >
                    Contact us
                </motion.button>
            </div>
        </form>
    </div>
  )
}

export default Contact