import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const CopaLibertadores = async () => {
  
    const getCopaLibertadores = await filterleague('Copa Libertadores')
  
    return (
    <div className='w-[600px]'>
        {getCopaLibertadores.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default CopaLibertadores