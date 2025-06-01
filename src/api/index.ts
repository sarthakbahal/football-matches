import { apiOptions, matchestype } from "@/types";

const options:apiOptions = {
    next : {revalidate: 30},
    headers : {
        "X-Auth-Token" : process.env.API_TOKEN,
        "Content-Type" : "application/json",
    }
}

export const getMatches = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = [year, month, day].join('-');
    
    const res = await fetch(`https://api.football-data.org/v4/matches?date=${todayStr}`, options)
    const data = await res.json()
    console.log("Today's matches:", data.matches?.map((match: matchestype) => ({
        competition: match.competition.name,
        homeTeam: match.homeTeam?.name,
        awayTeam: match.awayTeam?.name,
        status: match.status
    })))
    return data
}

export const getMatchesover = async () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0');
    const day = String(yesterday.getDate()).padStart(2, '0');
    const yesterdayStr = [year, month, day].join('-');

    const res = await fetch(`https://api.football-data.org/v4/matches?date=${yesterdayStr}`, options)
    const data = await res.json()
    console.log("Yesterday's matches:", data.matches?.map((match: matchestype) => ({
        competition: match.competition.name,
        homeTeam: match.homeTeam?.name,
        awayTeam: match.awayTeam?.name,
        status: match.status
    })))
    return data
}

export const filterleague = async (filterData:string) => {
    const getleague = await getMatches()
    const filterleague:matchestype[] = getleague.matches
    const getdata = filterleague.filter((item) => item.competition.name === filterData)
    console.log(`Filtered matches for ${filterData}:`, getdata.map((match: matchestype) => ({
        homeTeam: match.homeTeam?.name,
        awayTeam: match.awayTeam?.name,
        status: match.status
    })))
    return getdata
}

