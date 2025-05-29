import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const PremierLeague = async () => {
  
    const getEnglishLeague = await filterleague('Premier League')
  
    return (
    <div className='w-[600px]'>
        {getEnglishLeague.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default PremierLeague