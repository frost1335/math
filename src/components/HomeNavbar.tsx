'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (searchParams.get('about')) {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }

        if (searchParams.get('authors')) {
            document.getElementById('authors')?.scrollIntoView({ behavior: 'smooth' })
        }

        if (searchParams.get('contacts')) {
            document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [searchParams])

    return (
        <div className="absolute top-0 z-30 w-full">
            <div className="container max-w-7xl m-auto">
                <nav className="p-3 md:p-6 flex items-center md:justify-center">
                    <div onClick={() => setMobileMenu(true)} className="md:hidden p-2 text-3xl text-white">
                        <HiBars3BottomLeft />
                    </div>
                    {
                        mobileMenu ?
                            <div onClick={() => setMobileMenu(false)} className="md:hidden fixed top-0 bottom-0 left-0 right-0 bg-black/30" /> : null
                    }
                    <div className={`w-[70vw] md:hidden fixed z-50 top-0 bottom-0 left-0 bg-red-500 shadow-xl py-14 transition-all ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ul className="flex flex-col items-center gap-8">
                            <li onClick={() => setMobileMenu(false)}>
                                <Link className={`text-white text-lg pb-1.5 transition-all ${pathname === '/tests' ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href="/tests">
                                    Bilimingizni tekshiring
                                </Link>
                            </li>
                            <li onClick={() => setMobileMenu(false)}>
                                <Link onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className={`text-white text-lg pb-1.5 transition-all ${searchParams.get('about') ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href={{ pathname: '/', query: { about: true } }}>
                                    Kitob haqida
                                </Link>
                            </li>
                            <li onClick={() => setMobileMenu(false)}>
                                <Link onClick={() => document.getElementById('authors')?.scrollIntoView({ behavior: 'smooth' })} className={`text-white text-lg pb-1.5 transition-all ${searchParams.get('authors') ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href={{ pathname: '/', query: { authors: true } }}>
                                    Mualiflar haqida
                                </Link>
                            </li>
                            <li onClick={() => setMobileMenu(false)}>
                                <Link onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })} className={`text-white text-lg pb-1.5 transition-all ${pathname === '/contacts' ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href={{ pathname: '/', query: { contacts: true } }}>
                                    Aloqa uchun
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <Link className={`text-white text-lg pb-1.5 transition-all ${pathname === '/tests' ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href="/tests">
                                Bilimingizni tekshiring
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className={`text-white text-lg pb-1.5 transition-all ${searchParams.get('about') ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href={{ pathname: '/', query: { about: true } }}>
                                Kitob haqida
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => document.getElementById('authors')?.scrollIntoView({ behavior: 'smooth' })} className={`text-white text-lg pb-1.5 transition-all ${searchParams.get('authors') ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href={{ pathname: '/', query: { authors: true } }}>
                                Mualiflar haqida
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })} className={`text-white text-lg pb-1.5 transition-all ${pathname === '/contacts' ? 'border-b-2 border-dashed border-b-yellow-500' : 'hover:text-yellow-500'}`} href={{ pathname: '/', query: { contacts: true } }}>
                                Aloqa uchun
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};
