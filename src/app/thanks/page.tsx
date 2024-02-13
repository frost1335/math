import Contacts from "@/components/Contacts";
import { MdCheck } from "react-icons/md";

export default function page() {
    return (
        <div>
            <header className="bg-red-600 py-24 mb-20">
                <div className="container max-w-7xl m-auto flex flex-col items-center px-6">
                    <span className="mb-10 text-5xl text-white p-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-400/60">
                        <MdCheck />
                    </span>
                    <h2 className="max-w-lg text-center text-2xl text-white">Rahmat, tez orada menjerlarimiz aloqaga chiqib test natijangiz haqida ma’lumot beradi.</h2>
                </div>
            </header>
            <main>
                <Contacts />
            </main>
        </div>
    )
};
