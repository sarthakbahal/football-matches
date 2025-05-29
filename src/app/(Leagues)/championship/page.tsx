import { filterleague } from '@/api'
import LeagueTable from '@/app/components/LeagueTable'
import React from 'react'

const Championship = async () => {
    const apiResult = await filterleague('Championship')
    const getChampionship = Array.isArray(apiResult) ? apiResult : [];
    return (
    <div className='w-[600px]'>
        {getChampionship.length === 0 ? (
            <div className="w-full text-center py-10 text-xl font-bold text-[#ff61e6] drop-shadow-[0_2px_8px_#a259ff] bg-gradient-to-r from-[#3a0073] via-[#1a0033] to-[#0f051d] rounded-xl border-2 border-[#a259ff] shadow-lg">
                NO UPCOMING MATCHES, PLEASE CHECK LATER...
            </div>
        ) : (
            getChampionship.map((data) => (
                <div key={data.id}>
                    <LeagueTable data={data}/>
                </div>
            ))
        )}
    </div>
  )
}

export default Championship 