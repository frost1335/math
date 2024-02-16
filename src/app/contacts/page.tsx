import Contacts from "@/components/Contacts";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function Home() {
    return (
        <>
            <header>
                <div className="px-4 md:px-6 my-8 md:my-20 container max-w-7xl m-auto">
                    <ul className="flex items-center gap-3">
                        <li>
                            <Link className="text-slate-700 font-medium" href={'/'}>Bosh sahifa</Link>
                        </li>
                        <li>
                            <span className="text-xl mt-1 text-red-600">
                                <GoChevronRight />
                            </span>
                        </li>
                        <li>
                            <Link className="text-slate-700 font-medium" href={'/contacts'}>Aloqa uchun</Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="container max-w-7xl m-auto">
                <Contacts />
            </main>
        </>
    );
}
