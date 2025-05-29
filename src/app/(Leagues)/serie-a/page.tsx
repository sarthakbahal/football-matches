import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const SerieA = async () => {
    const getSerieA = await filterleague('Serie A')
    return (
    <div className='w-[600px]'>
        {getSerieA.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default SerieA 