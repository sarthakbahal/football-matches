import React from "react";
import { matchestype } from "@/types";
import Competition from "./Competition";
import Matches from "./Matches";
const LeagueTable = ({data}:{data:matchestype}) => {
    return (
        <div className="py-3 px-2 md:px-3 rounded-xl flex flex-col bg-gradient-to-br from-[#3a0073] via-[#1a0033] to-[#0f051d] mb-4 border-2 border-[#a259ff] shadow-lg">
            <Competition data={data}/>
            <Matches data={data}/>
        </div>
    )
}

export default LeagueTable;
