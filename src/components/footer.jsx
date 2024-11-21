import React from 'react'

const Footer = () => {
  return (
    <div className='relative bottom-0 w-full flex justify-around items-center bg-gray-800 text-white mt-10 mb-0 p-4'>
      <p>
        Developed by Lakshya Prajapati
      </p>
      <p>
        © CopyRight 2024
      </p>
      <div className='flex'>
        <a href="https://www.discord.com/" className='px-4'><img className='w-7' src="https://img.icons8.com/?size=100&id=30888&format=png&color=FFFFFF" alt="discord" /></a>
        <a href="https://www.instagram.com/" className='px-4'><img className='w-7' src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" alt="instagram" /></a>
        <a href="https://www.linkedin.com/" className='px-4'><img className='w-7' src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="linkedin" /></a>
        <a href="https://www.twitter.com/" className='px-4'><img className='w-7' src="https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=FFFFFF" alt="twitter" /></a>
      </div>

    </div>
  )
}

export default Footer
