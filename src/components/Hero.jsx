import React from 'react'
import Serve from '../assets/Service.png'

const Hero = () => {


    return (
      <div className=' grid gap-4 grid-cols-2 grid-rows-3 h-[400px] max-w-[100vw] mx-auto px-4 font-bold text-[#FAF8ED] bg-[#495E57]'> 
         <div> 
            <div className='p-4  text-[30px] md:text-[40px] xl:text-[50px]'>Little Lemon</div>
            <div className=' p-4 text-[#FAF8ED] text-[20px] md:text-[25px] xl:text-[35px]'> Asian and European cuisine with signature buttery sea foods. Enjoy the authentic flavors of every countries.
            </div>
            <button className='ml-6  mb-6 sm:mb-14 text-2xl bg-[#FAF8ED] text-[#495E57] w-[200px] h-[60px] rounded-lg mt-8'>Reservations</button>
            <div className= ' pt-20'> <p className= 'text-[30px] md:text-[40px] xl:text-[50px] font-bold text-[#495E57]'> This Weeks Specials !!! </p></div>
        </div>
        <div className='pt-50 sm:pt-5 mt-40 ml-5'>
           <img className='' src={Serve} alt='/' />
           <button className='ml-4 text-2xl text-[#FAF8ED] bg-[#495E57] w-[200px] h-[60px] rounded-lg mt-8'>Online Menu</button>
        </div>
      </div>
    )
  }

export default Hero