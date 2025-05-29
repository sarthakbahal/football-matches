import React from 'react'
import { matchestype } from '@/types'
import Image from 'next/image'
const Matches = ({data}:{data:matchestype}) => {
  
    const getDate = new Date(data?.utcDate).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })

  
    return (
    <div className='grid grid-cols-3'>
        <div className='w-full flex items-center'>
            <div className='w-[20px] h-[20px] relative mr-2'>
                <Image src={data?.homeTeam?.crest!} alt={data?.homeTeam?.name!} fill className='object-cover' />
            </div>
            <p className="font-bold text-[1rem] text-white drop-shadow-[0_1.5px_2px_#a259ff]">{data?.homeTeam?.name}</p>
        </div>
        <div className='px-3 m-auto flex justify-center items-center bg-gradient-to-br from-[#a259ff] via-[#3a0073] to-[#0f051d] rounded-lg shadow-lg border border-[#a259ff]'>
            {data?.status == 'FINISHED' ? (
                <p className='py-1 text-[1.1rem] font-extrabold text-[#e0aaff] drop-shadow-[0_1.5px_2px_#7f00ff]'>{data?.score?.fullTime?.home} <span className="mx-1 text-[#ff61e6]">:</span> {data?.score?.fullTime?.away}</p>
            ) : (
                <p className='py-1 text-[1.1rem] font-extrabold text-[#ff61e6] drop-shadow-[0_1.5px_2px_#7f00ff]'>{getDate}</p>
            )}
        </div>
        <div className='w-full flex items-center justify-end'>
            <p className="font-bold text-[1rem] text-white drop-shadow-[0_1.5px_2px_#a259ff] text-right">{data?.awayTeam?.name}</p>
            <div className='w-[20px] h-[20px] relative ml-2'>
                <Image src={data?.awayTeam?.crest!} alt={data?.awayTeam?.name!} fill className='object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Matches