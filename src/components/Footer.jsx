import React from 'react'
import Lemlogo from '../assets/lemonlogo.jpg'
import Metaicon from '../assets/meta.png'
import Instagramicon from '../assets/instagram.png'
import Twittericon from '../assets/twitter.png'
import Pinicon from '../assets/pin.png'

const Footer = () => {
  
  
    return (
    
        <div className=' gap-4 grid-cols-4 h-[230px] max-w-[100vw]  font-bold text-[#FAF8ED] bg-[#495E57]'> 
        <span>   <img className='inline mt-7 ml-[20px] max-w-[120px] h-auto' src={Lemlogo} alt='/' /> </span>
            <div className='inline text-center text-[20px]'>
                <ul className='text-center'>
                <li className='mt-[-120px]'>Contact</li>
                <li>+1 666 444 999 444</li>
                <li>little-lemon@restaurant.com</li> 
                <li><img className=' inline pt-[10px] max-w-[40px] h-auto' src={Pinicon} alt='/' /> </li>     
               </ul> 
            </div>     
            <div className='inline text-end'>
                <ul className='text-end mr-[20px]'>
                <li className='mt-[-140px] text-[20px]'>Social Media links</li>
                <li><img className='inline mr-12 pt-2 max-w-[30px] h-auto' src={Metaicon} alt='/' /> </li>
                <li><img className='inline mr-12 pt-2 max-w-[30px] h-auto' src={Instagramicon} alt='/' /></li>      
                <li><img className='inline mr-12 pt-2 max-w-[30px] h-auto' src={Twittericon} alt='/' /></li>               
               </ul> 
            </div>   

      </div>
  )
}

export default Footer