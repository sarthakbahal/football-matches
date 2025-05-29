'use client'

import { matchestype } from "@/types";
import React, {useState} from "react";
import LeagueTable from "./LeagueTable";

const Status = ({matcheslist, matcheslistfinished}:{matcheslist:matchestype[], matcheslistfinished:matchestype[]}) => {
   
   const [statusMatch, setStatusMatch] = useState<string>("TODAY")
   
    return (
        <div>
            <div className="flex justify-center space-x-6 mb-4 mt-2">
                <button
                    onClick={() => setStatusMatch("TODAY")}
                    className={`px-6 py-2 rounded-lg text-md font-bold transition-all duration-200 border-2 shadow-lg tracking-wide
                        ${statusMatch === "TODAY"
                            ? "bg-gradient-to-r from-[#a259ff] via-[#7f00ff] to-[#0f051d] border-[#ff61e6] text-[#fff] drop-shadow-[0_2px_8px_#a259ff] scale-105"
                            : "bg-gradient-to-r from-[#232046] via-[#1a0033] to-[#0f051d] border-[#a259ff] text-[#e0aaff] hover:scale-105 hover:border-[#ff61e6]"}
                    `}
                >
                    Today
                </button>
                <button
                    onClick={() => setStatusMatch("FINISHED")}
                    className={`px-6 py-2 rounded-lg text-md font-bold transition-all duration-200 border-2 shadow-lg tracking-wide
                        ${statusMatch === "FINISHED"
                            ? "bg-gradient-to-r from-[#a259ff] via-[#7f00ff] to-[#0f051d] border-[#ff61e6] text-[#fff] drop-shadow-[0_2px_8px_#a259ff] scale-105"
                            : "bg-gradient-to-r from-[#232046] via-[#1a0033] to-[#0f051d] border-[#a259ff] text-[#e0aaff] hover:scale-105 hover:border-[#ff61e6]"}
                    `}
                >
                    Finished
                </button>
            </div>

            <div className="w-full">
                {statusMatch === "TODAY" ? (
                        matcheslist.map((data) => (
                            <div key={data.id}>
                                {data.status === "TIMED" && (
                                    <LeagueTable data={data}/>
                                    
                                )}
                            </div>
                        ))
                ) : null}

                {statusMatch === "FINISHED" ? (
                    <>
                        {matcheslist.filter(data => data.status === "FINISHED").length === 0 &&
                         matcheslistfinished.filter(data => data.status === "FINISHED").length === 0 ? (
                          <div className="text-center text-gray-300 py-4">
                            No finished matches for today
                          </div>
                        ) : (
                          <>
                            {matcheslist.map((data) => (
                              <div key={data.id}>
                                {data.status === "FINISHED" && (
                                  <LeagueTable data={data}/>
                                )}
                              </div>
                            ))}
                            {matcheslistfinished.map((data) => (
                              <div key={data.id}>
                                {data.status === "FINISHED" && (
                                  <LeagueTable data={data}/>
                                )}
                              </div>
                            ))}
                          </>
                        )}
                    </>
                ) : null}

            </div>
        
        
        
        
        
        
        
        </div>

        

    )
}

export default Status