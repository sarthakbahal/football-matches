import React from "react";
import { matchestype } from "@/types";
import Competition from "./Competition";
import Matches from "./Matches";
const LeagueTable = ({data}:{data:matchestype}) => {
    return (
        <div className="py-3 px-2 md:px-3 rounded-md flex flex-col bg-[rgb(44,50,72)] mb-2">
            <Competition data={data}/>
            <Matches data={data}/>
        </div>
    )
}

export default LeagueTable;
