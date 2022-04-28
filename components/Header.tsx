import { BellIcon, ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414] bg-opacity-90 backdrop-blur-lg backdrop-filter'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={95}
                    height={95}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex ">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">Tv Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">Latest</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon className="hidden h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className='h-6 w-6' />
                <div className="flex items-center space-x-2">
                    <Link href="/account">
                        <img
                            src="https://rb.gy/g1pwyx"
                            alt=""
                            className="cursor-pointer rounded"
                        />

                    </Link>
                    <ChevronDownIcon className="hidden h-6 w-6 sm:inline" />

                </div>
            </div>
        </header>
    )
}

export default Header
