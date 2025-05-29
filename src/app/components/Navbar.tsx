import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

const Navbar:FC = () => {
    return(
        <div className="flex justify-between items-center py-2 px-4 bg-gradient-to-r from-[#7f00ff] via-[#3a0073] to-[#0f051d] rounded-xl border-b-2 border-[#a259ff] shadow-lg mb-4">
            <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-[30px] h-[30px]">
                    <Image src="/football-info.png" alt="logo" fill className="object-cover"/>
                </div>
                <span className="text-2xl font-extrabold text-[#e0aaff] drop-shadow-[0_2px_4px_#a259ff] tracking-wide">Football Match Info</span>
            </Link>

            <p className="text-[#e0aaff] font-semibold">Created by <Link href="https://github.com/sarthakbahal" className="text-[#ff61e6] underline hover:text-[#e0aaff]">Sarthak Bahal</Link></p>
        </div>
    )
}

export default Navbar