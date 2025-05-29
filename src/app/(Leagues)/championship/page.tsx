import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const Championship = async () => {
    const getChampionship = await filterleague('Championship')
    return (
    <div className='w-[600px]'>
        {getChampionship.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default Championship 