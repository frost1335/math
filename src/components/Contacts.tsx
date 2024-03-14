import { BsTelegram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { INSTAGRAM_LINK, PHONE_LINK, TELEGRAM_LINK } from "@/constants";

export default function Contacts() {
    return (
        <div className="px-4 md:px-8 py-10 md:py-14 mx-6 my-12 rounded-xl shadow-2xl border border-slate-300">
            <h2 className="text-3xl text-center font-semibold text-zinc-700 mb-8 md:mb-16 relative">
                <span className="block max-w-28 w-full h-3 rounded-md bg-red-400 absolute left-1/2 -translate-x-1/2 -bottom-0.5 z-0 md:ml-10" />
                <span className="relative z-10">
                    Biz bilan bo’glaning:
                </span>
            </h2>
            <ul className="grid lg:grid-cols-4 xl:gap-6 gap-4 gap-y-8 sm:grid-cols-2 mt-6">
                <li>
                    <a target="_blank" href={TELEGRAM_LINK} className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-2xl md:text-4xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <BsTelegram />
                        </span>
                        <p className="font-medium font-mono">@innovationmatkematika</p>
                    </a>
                </li>
                <li>
                    <a target="_blank" href={INSTAGRAM_LINK} className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-2xl md:text-4xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <RiInstagramFill />
                        </span>
                        <p className="font-medium font-mono">#innovationmatkematika</p>
                    </a>
                </li>
                <li>
                    <a href={PHONE_LINK} className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-2xl md:text-4xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <FaPhone />
                        </span>
                        <p className="font-medium font-mono">+998 93 189 73 18</p>
                    </a>
                </li>
            </ul>
        </div>
    )
};
