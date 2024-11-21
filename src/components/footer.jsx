import React from 'react'

import linkedimg from '../assets/icons8-linkedin-50.png'
import instaimg from '../assets/icons8-instagram-50.png'
import twitterimg from '../assets/icons8-twitterx-32.png'
import faceimg from '../assets/icons8-facebook-50.png'

const Footer = () => {
  return (
    <div className='bottom-0 w-full flex justify-around items-center bg-gray-800 text-white mt-10 mb-0 p-4'>
      <p className='hidden md:block'>
        Developed by Lakshya Prajapati
      </p>
      <p className='hidden md:block'>
        © CopyRight 2024
      </p>
      <p className='block md:hidden'>
        © 2024
      </p>
      <div className='flex'>
        <a href="https://www.discord.com/" className='px-1 md:px-4'><img className='w-7' src={faceimg} alt="telegram" /></a>
        <a href="https://www.instagram.com/lakshya_3804/" className='px-1 md:px-4'><img className='w-7' src={instaimg} alt="instagram" /></a>
        <a href="https://in.linkedin.com/in/lakshya-prajapati-877b22289" className='px-1 md:px-4'><img className='w-7' src={linkedimg} alt="linkedin" /></a>
        <a href="https://x.com/lakshya_3804?t=CI8afYh6TabLI1ILNb2uJQ&s=08" className='px-1 md:px-4'><img className='w-7' src={twitterimg} alt="twitter" /></a>
      </div>

    </div>
  )
}

export default Footer
