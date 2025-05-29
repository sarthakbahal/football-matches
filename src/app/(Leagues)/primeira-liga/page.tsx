import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const PrimeiraLiga = async () => {
    const getPrimeiraLiga = await filterleague('Primeira Liga')
    return (
    <div className='w-[600px]'>
        {getPrimeiraLiga.map((data) => (
            <div key={data.id}>
                <LeagueTable data={data}/>
            </div>
        ))}
    </div>
  )
}

export default PrimeiraLiga 