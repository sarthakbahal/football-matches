import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

const Navbar:FC = () => {
    return(
        <div className="flex justify-between items-center py-2">
            <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-[30px] h-[30px]">
                    <Image src="/football-info.png" alt="logo" fill className="object-cover"/>
                </div>
                <span className="text-2xl font-bold none md:block">Football Match Info</span>
            </Link>

            <p>Created by <Link href="https://github.com/sarthakbahal" className="text-blue-500">Sarthak Bahal</Link></p>
        </div>
    )
}

export default Navbar