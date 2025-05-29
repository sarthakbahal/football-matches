import { FC } from 'react'
import LinkSide from './Linkside'

const Sideabar:FC = () => {
  
    const Leagues = [
        { id:1,name:"Premier League",href:"premier-league",emblem:"/img/leagues/premier_league.webp"},
        { id:2,name:"Primera Division",href:"la-liga",emblem:"/img/leagues/laliga.svg"},
        { id:3,name:"Bundesliga",href:"bundesliga",emblem:"/img/leagues/bundesliga.webp"},
        { id:4,name:"Serie A",href:"serie-a",emblem:"/img/leagues/serie_a.webp"},
        { id:5,name:"Ligue 1",href:"ligue-1",emblem:"/img/leagues/ligue_1.webp"},
        { id:6,name:"Championship",href:"championship",emblem:"/img/leagues/championship.webp"},
        { id:7,name:"Primeira Liga",href:"primeira-liga",emblem:"/img/leagues/liga_portugal.webp"},
        { id:8,name:"Brazilian Championship Series A",href:"brazilian-series-a",emblem:"/img/leagues/brazilian_serie_a.webp"},
        { id:9,name:"Copa Libertadores",href:"copa-libertadores",emblem:"/img/leagues/copa_libertadores.webp"},
    ]
 
    return (
        <section className="px-2 md:px-4 py-2 bg-gradient-to-br from-[#3a0073] via-[#1a0033] to-[#0f051d] rounded-xl border-2 border-[#a259ff] shadow-lg">
            <div>
                <h1 className="text-xl font-extrabold mb-4 text-[#e0aaff] drop-shadow-[0_2px_4px_#a259ff] tracking-wide uppercase">Leagues Monitored</h1>
                <ul className="space-y-2">
                    {
                        Leagues.map((league)=>(
                            <div key={league.id} className='flex'>
                                <LinkSide href={league.href} src={league.emblem} name={league.name}/>
                            </div>
                        ))
                    }
                </ul>
            </div>

        </section>    
    )
}

export default Sideabar