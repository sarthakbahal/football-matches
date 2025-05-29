import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const LaLiga = async () => {
  
    const getLaLiga = await filterleague('Primera Division')
  
    return (
    <div className='w-[600px]'>
        {getLaLiga.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default LaLiga