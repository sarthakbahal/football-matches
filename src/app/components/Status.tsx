'use client'

import { matchestype } from "@/types";
import React, {useState} from "react";
import LeagueTable from "./LeagueTable";

const Status = ({matcheslist, matcheslistfinished}:{matcheslist:matchestype[], matcheslistfinished:matchestype[]}) => {
   
   const [statusMatch, setStatusMatch] = useState<string>("TODAY")
   
    return (
        <div>
            <div className="flex space-x-4 mb-2 md:mb-4">
                <button onClick={() => setStatusMatch("TODAY")} className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch === "TODAY" ? "bg-red-400 font-semibold text-white" : "bg-blue-400 font-regular text-primary"}`}>Today</button>
                <button onClick={() => setStatusMatch("FINISHED")} className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${statusMatch === "FINISHED" ? "bg-red-400 font-semibold text-white" : "bg-blue-400 font-regular text-primary"}`}>Finished</button>
            </div>

            <div className="w-full">
                {statusMatch === "TODAY" ? (
                        matcheslist.map((data) => (
                            <div key={data.id}>
                                {data.status === "TIMED" && (
                                    <LeagueTable/>
                                    
                                )}
                            </div>
                        ))
                ) : null}

                {statusMatch === "FINISHED" ? (
                        matcheslist.map((data) => (
                            <div key={data.id}>
                                {data.status === "FINISHED" && (
                                    <LeagueTable/>
                                    
                                )}
                            </div>
                        ))
                ) : null}

                {statusMatch === "FINISHED" ? (
                        matcheslistfinished.map((data) => (
                            <div key={data.id}>
                                
                            </div>
                        ))
                ) : null}

            </div>
        
        
        
        
        
        
        
        </div>

        

    )
}

export default Status