import React from 'react'
import { matchestype } from '@/types'
import Image from 'next/image'
const Competition = ({data}:{data:matchestype}) => {
  
    const nd = new Date(data?.utcDate)
    const dateconv = nd.toDateString()
  
  
    return (
    <div className='mb-4 flex justify-between items-center px-4 py-1 bg-gradient-to-r from-[#a259ff] via-[#3a0073] to-[#0f051d] hover:from-[#ff61e6] hover:via-[#3a0073] hover:to-[#0f051d] rounded-lg border border-[#a259ff] shadow-md'>
        <div className='flex space-x-4'>
            <Image src={data?.competition.emblem} alt={data.competition.name} width={20} height={20} />
            <p className='text-sm font-bold text-[#e0aaff] drop-shadow-[0_1.5px_2px_#a259ff]'>{data?.competition.name}</p>
        </div>
        <p className='text-xs md:text-sm text-[#ff61e6] font-semibold'>{dateconv}</p>
    </div>
  )
}

export default Competition