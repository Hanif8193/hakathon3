import React from 'react'
import Image from 'next/image'
function Dress() {
  return (
    // <div className='w-full h-full sm:h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center pt-8 mt-8 sm:mt-0'>
      <div className='grid grid-cols-1 sm: grid-cols-2md: w-full h-full pt-8 mt-8 sm:mt-0 bg-[#F0F0F0] '>
      {/* Top */}
    <div className='mt-2'>
        <h2 className='text-xl sm: md:text-3xl font-bold pl-6 text-center' >BROWES BY DTRSS STYLE</h2>
    </div>
     {/* Bottom */}
     <div className=' w-[90%] h-full sm:h-[600px] flex flex-wrap justify-between items-center mt-5 relative'>
     
     <div className=' w-[300px] h-[200px] m-1 '>
      <Image src={'/Casual.png'}alt='T'width={100}height={100} className='w-full h-full rounded-[20px] '></Image>
      <span className='absolute top-10 left-5 text-xl font-bold'>Casual</span>
           </div>
     <div className=' w-[450px] h-[200px] m-1 relative'>
     <Image src={'/Formal.png'}alt='T'width={100}height={100} className='w-full h-full rounded-[20px] '></Image>
     <span className='absolute top-10 left-5 text-xl font-bold'>Formal</span>
     </div>
     <div className=' w-[450px] h-[200px] m-1 relative '>
     <Image src={'/Party.png'}alt='T'width={100}height={100} className='w-full h-full rounded-[20px]'></Image>
     <span className='absolute top-10 left-5 text-xl font-bold'>Party</span>
     </div>
     <div className='w-[300px] h-[200px] m-1 relative'>
     <Image src={'/GYM.png'}alt='T'width={100}height={100} className='w-full h-full rounded-[20px]'></Image>
     <span className='absolute top-10 left-5 text-xl font-bold'>Gym</span>
     </div>

     </div>

    </div>
  )
}

export default Dress