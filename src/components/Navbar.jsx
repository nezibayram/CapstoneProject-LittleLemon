import React,{useState} from 'react'
import Lolo from '../assets/logo.jpg'



const Navbar = ()  => {
  

  return (
    <div className='flex justify-between items-center h-24 max-w-[100vw] mx-auto px-4 bg-[#FAF8ED]'>
        <p><img className='w-[300px] h-[75px]' src={Lolo} alt='/' /> </p>
        <ul className='hidden md:flex'>
            <button className='p-4 text-2xl font-bold text-[#495E57]'>
            Home</button>
            <button className=' mt-4 mr-2 text-xl font-semibold justify-center h-[30px] rounded-md bg-[#495E57] pl-4 pr-4 pb-2 text-[#FAF8ED] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#30C694]'>
            About </button>
            <button className=' mt-4 mr-2 text-xl font-semibold justify-center h-[30px] rounded-md bg-[#495E57] pl-4 pr-4 pb-2 text-[#FAF8ED] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#30C694]'>
            Menu </button>
            <button className=' mt-4 mr-2 text-xl font-semibold justify-center h-[30px] w-[150px] rounded-md bg-[#495E57] pl-4 pr-4 pb-2 text-[#FAF8ED] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#30C694]'>
            Reservations </button>
            <button className=' mt-4 mr-2 text-xl font-semibold justify-center h-[30px] w-[130px] rounded-md bg-[#495E57] pl-4 pr-4 pb-2 text-[#FAF8ED] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#30C694]'>
            Order-Line </button>
            <button className=' mt-4 mr-2 text-xl font-semibold justify-center h-[30px] rounded-md bg-[#495E57] pl-4 pr-4 pb-2 text-[#FAF8ED] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#30C694]'>        
            Login </button>
        </ul>
    </div>
  )
}




export default Navbar