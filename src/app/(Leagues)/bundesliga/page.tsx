import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const Bundesliga = async () => {
  
    const getBundesliga = await filterleague('Bundesliga')
  
    return (
    <div className='w-[600px]'>
        {getBundesliga.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default Bundesliga