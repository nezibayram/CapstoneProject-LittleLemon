import React from 'react'
import Juice from '../assets/lemonjuice.jpg'

const History = () =>  {
  
    return (
    <div className=' flex-auto grid gap-3 grid-cols-2 grid-rows-3 h-[600px] max-w-[100vw] mx-auto px-4 font-bold text-[#495E57] bg-[#FAF8ED]'> 
        <div> 
           <div className='p-4  text-[30px] md:text-[40px] xl:text-[50px]'>Chicago</div>
              <div className=' p-4 text-[20px] md:text-[25px] xl:text-[35px]'> Asian and European cuisine with signature buttery sea foods. Enjoy the authentic flavors of every countries.</div>
        </div>

         <img className='' src={Juice} alt='/' /> 

      </div>
       

  )
}

export default History