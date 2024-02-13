'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="border-b">
            <nav className="container max-w-7xl m-auto p-6 flex items-center justify-center">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/">
                            Bosh sahifa
                        </Link>
                    </li>
                    <li>
                        <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/tests' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/tests">
                            Testlar
                        </Link>
                    </li>
                    <li>
                        <Link className={`text-zinc-800 text-lg pb-1.5 transition-all ${pathname === '/contacts' ? 'border-b-2 border-dashed border-b-red-500' : 'hover:text-red-500'}`} href="/contacts">
                            Kontaktlar
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
