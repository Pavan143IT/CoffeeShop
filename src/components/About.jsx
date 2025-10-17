import React from 'react'
import Bg from '../assets/Bg.png'
import Lottie from 'lottie-react';
import coffee from '../assets/Coffeeanime.json'
import { motion } from 'framer-motion'; 

const bgImage = {
    backgroundImage: `url(${Bg})`,
    backgroundcolor: "#270c03",
    backgroundPosition:"center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    height:"100%",
    width:"100%",
};

const About = () => {
  return (
    <div id='about' className='md:py-20 py-40' style={bgImage}>
      <motion.h1 
       initial={{opacity:0,y:100}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:1.5, delay:0.5}}
      className='text-amber-900 font-cursive text-5xl text-center'>About Us</motion.h1>
      <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'>
        {/* image section */}
        <motion.div
         initial={{opacity:0,scale:0.5}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:1.5, delay:0.5}}
        >
            <Lottie animationData={coffee} className='md:w-[600px]'/>
        </motion.div>
        {/* text section */}
        <div className='space-y-4 px-4 md:px-0'>
            <motion.h1 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.5}}
            className='text-2xl font-cursive2 text-amber-900'>Passion for Perfect Coffee</motion.h1>
            <motion.p 
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1.5, delay:0.6}}
            className='font-cursive2'>In 2023, I, Pavan Kumar, opened Pavan Coffee in my hometown of Ongole, driven by a simple dream—to share my love for coffee and the joy it brings. What began as a small idea soon became a journey of passion and perseverance. I spent endless hours learning about coffee beans, experimenting with roasting, and perfecting blends, all with the hope of creating something meaningful for my community.

From those humble beginnings, Pavan Coffee has grown into more than just a café—it has become a place where stories are shared, friendships are formed, and hearts are warmed with every cup. Every coffee we serve carries a piece of my journey, made with care, love, and a commitment to quality. My mission has always been simple: to bring the finest coffee to Ongole while keeping the warmth, soul, and personal touch of a small, local business alive..</motion.p>
        </div>
      </div>
    </div>
  )
}

export default About
