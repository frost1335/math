import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import TestSection from "./components/TestSection";

export default function page() {
    return (
        <main className="min-h-[70vh]">
            <div className="px-6 my-14 container max-w-7xl m-auto">
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
                        <Link className="text-slate-700 font-medium" href={'/tests'}>Testlar</Link>
                    </li>
                </ul>
            </div>

            <section className="container max-w-7xl m-auto px-8 mb-16 py-6 pb-20">
                <TestSection />
            </section>
        </main>
    )
};
