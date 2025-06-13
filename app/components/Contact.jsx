// import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'
import {motion} from "motion/react"
const Contact = () => {
    const [result, setResult] = useState("");
   const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  try {
    const formData = new FormData(event.target);
    formData.append("access_key", "10c6c721-7763-4558-9715-4f37e9799f03");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Submission error:", data);
      setResult(`Submission failed: ${data.message}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    setResult("Something went wrong. Please try again later.");
  }
  };
  return (
    <motion.div
     initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>


      <motion.h4
       initial={{y: -20, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>


      <motion.h2
       initial={{y: -20, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>


      <motion.p
       initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>If you have any query! please feel free to contact me using the form below.
      </motion.p>


     <motion.form
      initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ delay: 0.9, duration: 0.5 }}
     onSubmit={onSubmit} className="max-w-3xl mx-auto text-black dark:text-white">
  <h2 className="text-center text-5xl font-Ovo mb-4">Get in touch</h2>
  <p className="text-center text-lg mb-10 font-Ovo text-gray-800 dark:text-white/80">
    I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <motion.input

    initial={{x: -50, opacity: 0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay: 1.1, duration: 0.6}}


      type="text"
      name="name"
      required
      placeholder="Enter your name"
      className="w-full p-4 rounded-md border border-gray-300 dark:border-white/30 
                 bg-white dark:bg-white/5 
                 placeholder-gray-500 dark:placeholder-white/70 
                 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
    />
    <motion.input
      initial={{x: 50, opacity: 0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay: 1.2, duration: 0.6}}
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="w-full p-4 rounded-md border border-gray-300 dark:border-white/30 
                 bg-white dark:bg-white/5 
                 placeholder-gray-500 dark:placeholder-white/70 
                 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
    />
  </div>

  <motion.textarea
    initial={{y: 100, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{delay: 1.3, duration: 0.6}}
    name="message"
    rows="6"
    required
    placeholder="Enter your message"
    className="w-full mt-6 p-4 rounded-md border border-gray-300 dark:border-white/30 
               bg-white dark:bg-white/5 
               placeholder-gray-500 dark:placeholder-white/70 
               focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
  ></motion.textarea>

  <motion.button
  whileHover={{scale: 1.05}}
  transition={{duration: 0.3}}
    type="submit"
    className="mt-8 mx-auto flex items-center gap-2 px-8 py-3 
               border border-black dark:border-white 
               text-black dark:text-white 
               rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
               transition-all duration-300"
  >
    Submit now
    <Image src={assets.right_arrow_white} alt="arrow" className="w-4 dark:invert" />
  </motion.button>

  <p className="text-center mt-4">{result}</p>
</motion.form>


    </motion.div>
  )
}

export default Contact
