import Link from "next/link";

export function Footer() {
    return (
        <div className="bg-zinc-800 px-6 py-10">
            <footer className="container max-w-7xl m-auto flex flex-col sm:flex-row gap-y-5 items-center justify-between">
                <p className="text-slate-200 font-medium">Innovatsion Matematika © 2024</p>
                <Link href={'#'} className="text-white hover:text-yellow-400 font-medium transition-all text-center">
                    Shaxsiy ma`lumotlarni qayta ishlash kafolati
                </Link>
            </footer>
        </div>
    )
}