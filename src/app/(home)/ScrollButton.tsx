'use client'
import { IoArrowDown } from "react-icons/io5";

export default function ScrollButton({ children, elem }: { children: React.ReactNode, elem: string }) {
    return (
        <button onClick={() => document.getElementById(elem)?.scrollIntoView({ behavior: 'smooth' })} className="text-lg text-white hover:text-yellow-400 absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all">
            {children}
            <span className="mt-3 text-2xl animate-bounce"><IoArrowDown /></span>
        </button>
    )
};
