import React from 'react'
import img1 from '../src/assets/img/Screenshot 2023-10-19 173226.png'
import img2 from '../src/assets/img/OIP.jpeg'

function Content() {
  return (
    <div className=' bg-gradient-to-r from-cyan-500 to-blue-200 md:p-20 '>
        <div className='bg-gray-100 p-12 rounded-3xl '>
            <div className='flex flex-col items-center justify-center space-y-4 sm:flex-row sm:place-content-between '>
                <p><b>Wiggle</b></p>
                <nav>
                    <ul className='flex flex-col sm:flex-row gap-10'>
                        <li><a className='text-orange-600' href="">home</a></li>
                        <li><a href="">insurances</a></li>
                        <li><a href="">claims</a></li>
                        <li><a href="">testimonials</a></li>
                        <li><a href="">FAQ'S</a></li>
                        <li><a href="">pricing</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex  text-center flex-col-reverse space-y-10 sm:flex-row place-content-between pt-12 items-center sm:text-left'>
                <div className='space-y-10 sm:max-w-lg '>
                 <div className='flex flex-col space-y-3 '>
                    <p>made with love for tailwind css developers</p>
                    <h1 className='text-4xl sm:text-6xl'><b>Stand out from the crowd</b></h1>
                    <p>build your MVP with user experience,best practices and eye catching interfaces</p>
                 </div>
                 <div className='flex gap-8'>
                    <button className='bg-orange-600 rounded-2xl p-2 '>Get started</button>
                    <button className='text-orange-600'>Free trial</button>
                 </div>
                </div>
                <div><img className='w-96' src={img1} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Content
