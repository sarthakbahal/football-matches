import { apiOptions, matchestype } from "@/types";

const option:apiOptions = {
    next : {revalidate: 30},
    headers : {
        "X-Auth-Token" : process.env.API_TOKEN,
        "Content-Type" : "application/json",
    }
}

export const getMatches = async () => {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, '0');
    const day = String(today.getUTCDate()).padStart(2, '0');
    const todayStr = [year, month, day].join('-');
    
    const res = await fetch(`https://api.football-data.org/v4/matches?date=${todayStr}`, option)
    return res.json()
}

const currdate = new Date();
const getdatemonth = new Date(currdate.getTime())
getdatemonth.setDate(currdate.getDate() - 1)
const year = getdatemonth.getFullYear()
const month = String(getdatemonth.getMonth() + 1).padStart(2, '0')
const day = String(getdatemonth.getDate()).padStart(2, '0')

const yesterday = [year,month,day].join('-')

export const getMatchesover = async () => {
    const res = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`)
    return res.json()
}

export const filterleague = async (filterData:string) => {
    const getleague = await getMatches()
    const filterleague:matchestype[] = getleague.matches
    const getdata = filterleague.filter((item) => item.competition.name === filterData)
    return getdata
}

