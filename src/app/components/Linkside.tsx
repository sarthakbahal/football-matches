import Link from "next/link";
import React from "react";
import Image from "next/image";

const Linkside = ({href,src,name}:{href:string,src:string,name:string}) => {
    return (
        <Link href={href} className="flex items-center py-2 px-3 rounded-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#a259ff] hover:via-[#3a0073] hover:to-[#0f051d] hover:shadow-[0_0_10px_2px_#a259ff] border border-transparent hover:border-[#ff61e6]">
            <div className="w-[28px] h-[28px] relative flex items-center justify-center mr-3 drop-shadow-[0_2px_8px_#a259ff] group-hover:scale-110 transition-transform duration-200">
                <Image src={src} alt={name} width={28} height={28}/>
            </div>
            <p className="text-sm md:text-base font-bold text-[#e0aaff] group-hover:text-[#ff61e6] tracking-wide drop-shadow-[0_1.5px_2px_#a259ff] transition-colors duration-200">{name}</p>
        </Link>
    )
}

export default Linkside