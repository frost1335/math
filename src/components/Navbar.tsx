'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const pathname = usePathname()
    const searchParams = useSearchParams()

    return (
        <Suspense>
            <div className="border-b">
                <nav className="container max-w-7xl m-auto p-3 md:p-6 flex items-center md:justify-center">
                    <div onClick={() => setMobileMenu(true)} className="md:hidden p-2 text-3xl">
                        <HiBars3BottomLeft />
                    </div>
                    {
                        mobileMenu ?
                            <div onClick={() => setMobileMenu(false)} className="fixed top-0 bottom-0 left-0 right-0 bg-black/30" /> : null
                    }
                    <div className={`w-[70vw] fixed z-40 top-0 bottom-0 left-0 bg-white shadow-xl py-14 transition-all ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
                        <ul className="flex flex-col items-center gap-8">
                            <li>
                                <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/tests' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/tests">
                                    Bilimingizni tekshiring
                                </Link>
                            </li>
                            <li>
                                <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${searchParams.get('about') ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href={{ pathname: '/', query: { about: true } }}>
                                    Kitob haqida
                                </Link>
                            </li>
                            <li>
                                <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${searchParams.get('authors') ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href={{ pathname: '/', query: { authors: true } }}>
                                    Mualiflar haqida
                                </Link>
                            </li>
                            <li>
                                <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/contacts' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/contacts">
                                    Aloqa uchun
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/tests' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/tests">
                                Bilimingizni tekshiring
                            </Link>
                        </li>
                        <li>
                            <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${searchParams.get('about') ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href={{ pathname: '/', query: { about: true } }}>
                                Kitob haqida
                            </Link>
                        </li>
                        <li>
                            <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${searchParams.get('authors') ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href={{ pathname: '/', query: { authors: true } }}>
                                Mualiflar haqida
                            </Link>
                        </li>
                        <li>
                            <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/contacts' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/contacts">
                                Aloqa uchun
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Suspense>
    )
};
