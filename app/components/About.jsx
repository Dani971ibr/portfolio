// 'use client'
import React from 'react'
import { assets, infoList, toolsData } from '../../assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4
      initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>

      <h2
      initial={{opacity: 0, y: -20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>About Me</h2>

      <motion.div
      initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

        <motion.div
        initial={{opacity: 0, scale: 0.9}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
        initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>I'm a passionate and motivated entry-level frontend developer with a strong foundation in HTML, CSS, JavaScript, and modern tools like React. I enjoy turning creative designs into responsive, user-friendly websites. I'm continuously learning and building real-world projects to grow my skills and contribute to meaningful digital experiences.</p>
          <motion.ul
          initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8, delay: 1}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
                <motion.li
                whileInView={{scale: 1.05}}
                key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
  bg-white dark:bg-darkHover/30 
  hover:bg-lightHover dark:hover:bg-darkHover/50 
  hover:-translate-y-1 duration-500 shadow-md hover:shadow-lg 
  dark:border-white dark:text-white text-gray-800'>
  
  <Image 
    src={isDarkMode ? iconDark : icon} 
    className='w-7 mt-3' 
    alt={title} 
  />
  <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
  <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
</motion.li>
            ))}
          </motion.ul>
          <motion.h4
          initial={{y: 20, opacity: 0}}
    whileHover={{y: 0, opacity: 1}}
    transition={{delay: 1.3, duration: 0.5}}
          className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>
          <motion.ul
          initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 1, duration: 0.6}}
          className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
              <motion.li
              whileHover={{scale: 1.1}}
              className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover: bg-lightHover hover:-translate-y-1 duration-500'
               key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
