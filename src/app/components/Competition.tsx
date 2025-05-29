import React from 'react'
import { matchestype } from '@/types'
import Image from 'next/image'
const Competition = ({data}:{data:matchestype}) => {
  
    const nd = new Date(data?.utcDate)
    const dateconv = nd.toDateString()
  
  
    return (
    <div className='mb-4 flex justify-between items-center px-4 py-1 bg-gray-400 hover:bg-slate-500 rounded-md'>
        <div className='flex space-x-4'>
            <Image src={data?.competition.emblem} alt={data.competition.name} width={20} height={20} />
            <p className='text-sm text-gray-300'>{data?.competition.name}</p>
        </div>
        <p className='text-xs md:text-sm'>{dateconv}</p>
    </div>
  )
}

export default Competition