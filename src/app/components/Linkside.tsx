import Link from "next/link";
import React from "react";
import Image from "next/image";

const Linkside = ({href,src,name}:{href:string,src:string,name:string}) => {
    return (
        <Link href={href} className="flex items-center py-2 px-2 rounded-md hover:bg-[rgb(54,63,78)]">
            <Image src={src} alt={name} width={20} height={20}/>
            <p className="text-xs ml-4 md:text-sm">{name}</p>
        </Link>
    )
}

export default Linkside