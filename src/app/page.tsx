import Image from "next/image";
import { getMatches, getMatchesover } from "@/api";
import Status from "./components/Status";

export default async function Home() {

  const getdata = await getMatches()
  const getdatafinished = await getMatchesover()
  console.log("Finished matches API response:", getdatafinished)

  const matchesdata = getdata?.matches
  const matchesdatafinished = getdatafinished?.matches
  
  const nd = new Date();
  const dateconv = nd.toDateString(); 

  return (
    <section className="px-2 md:px-4 md:w-[600px] mx-auto">
        <div className="flex flex-col items-center justify-center mb-6 md:mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#e0aaff] drop-shadow-[0_2px_8px_#a259ff] tracking-widest mb-2 uppercase">MATCHES</h1>
            <div className="px-6 py-2 bg-gradient-to-r from-[#a259ff] via-[#3a0073] to-[#0f051d] rounded-lg border-2 border-[#ff61e6] shadow-md text-[#fff] text-lg font-semibold tracking-wide flex items-center justify-center">
              <span className="mr-2"><svg width="18" height="18" fill="#ff61e6" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z"/></svg></span>
              <p className="inline-block align-middle">{dateconv}</p>
            </div>
        </div>
        <Status matcheslist={matchesdata} matcheslistfinished={matchesdatafinished} />
    </section>
  );
}
