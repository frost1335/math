import { BsTelegram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

export default function Contacts() {
    return (
        <div className="px-8 py-14 mx-6 my-12 rounded-xl shadow-2xl border border-slate-300">
            <h2 className="text-3xl text-center font-semibold text-zinc-700 mb-14 relative">
                <span className="block max-w-28 w-full h-3 rounded-md bg-red-400 absolute left-1/2 -translate-x-1/2 -bottom-0.5 z-0 ml-10" />
                <span className="relative z-10">
                    Biz bilan bo’glaning:
                </span>
            </h2>
            <ul className="grid grid-cols-4 gap-6">
                <li>
                    <a href="" className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-4xl w-20 h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <BsTelegram />
                        </span>
                        <p className="font-medium">@innovationmatkematika</p>
                    </a>
                </li>
                <li>
                    <a href="" className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-4xl w-20 h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <RiInstagramFill />
                        </span>
                        <p className="font-medium">#innovationmatkematika</p>
                    </a>
                </li>
                <li>
                    <a href="" className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-4xl w-20 h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <FaPhone />
                        </span>
                        <p className="font-medium">+998 93 189 73 18</p>
                    </a>
                </li>
                <li>
                    <a href="" className="flex flex-col items-center text-slate-600 hover:text-red-600 transition-all">
                        <span className="mb-4 text-4xl w-20 h-20 flex items-center justify-center rounded-full border-2 border-zinc-700 text-zinc-700 shadow-lg hover:text-white hover:bg-red-600 hover:border-red-600 hover:shadow-xl transition-all">
                            <MdMail />
                        </span>
                        <p className="font-medium">innovationmatkematika@mail.ru</p>
                    </a>
                </li>
            </ul>
        </div>
    )
};
