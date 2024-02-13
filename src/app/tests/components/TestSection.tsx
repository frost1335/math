'use client'

import ReactInputMask from "react-input-mask"
import Button from "@/components/Button"
import { testQuestions, testTime } from "@/constants";
import { useLayoutEffect, useState } from "react"
import { MdOutlineTimer } from "react-icons/md"
import { useRouter } from "next/navigation";

const phoneStringLength = 18

function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export default function TestSection() {
    const router = useRouter()
    const [name, setName] = useState<string | null>('')
    const [phone, setPhone] = useState<string | null>('+998')
    const [error, setError] = useState('')

    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)

    const finishTest = () => setFinished(true)

    const formValidation = () => {
        return name && (phone?.length === phoneStringLength)
    }

    const onSubmit = async (e) => {
        console.log('s');
        e.preventDefault()

        if (formValidation()) {
            const formData = {
                name, phone
            }

            // const data = await fetch(`/post/test/results`, {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // }).then(res => res.json())

            console.log(formData);
            router.push('/thanks')
        }
        else {
            setError('Iltimos Ism familyangizni yoki Tel. raqamingizni to`g`ri kiriting!')
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <div className="p-10 py-20 w-full rounded-xl border border-slate-300 shadow-2xl">
            {
                finished ? (
                    <div>
                        <div className="py-12 flex flex-col items-center">
                            <h2 className="text-zinc-700 text-center font-semibold text-2xl mb-8">Natijalaringizni olish uchun pastda ismingiz va telefon raqamingiz qoldiring!</h2>
                            <form onSubmit={onSubmit} className="flex flex-col max-w-sm w-full">
                                <div className="flex flex-col items-start mb-5">
                                    <label htmlFor="name" className="font-sans text-lg text-slate-600 mb-2">Ism & Familiya <span className="text-red-600">*</span></label>
                                    <input value={name || ''} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded-md font-medium text-zinc-700 placeholder:text-slate-500 font-sans" type="text" id="name" placeholder="Ism & Familiya" />
                                </div>
                                <div className="flex flex-col items-start mb-5">
                                    <label htmlFor="phone" className="font-sans text-lg text-slate-600 mb-2">Tel. raqam <span className="text-red-600">*</span></label>
                                    <ReactInputMask
                                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-md font-medium text-zinc-700 placeholder:text-slate-500 font-sans"
                                        mask={`+999(99)-999-99-99`}
                                        value={`${phone}`}
                                        id="phone"
                                        maskChar={null}
                                        onChange={(e) => setPhone(e?.target?.value || '')}
                                        placeholder="Tel. raqam"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center mt-8">
                                    <Button disabled={!formValidation()} type="submit" status="secondary">
                                        Jo`natish
                                    </Button>
                                    <p className="font-medium text-center text-orange-500 mt-3">{error}</p>
                                </div>
                            </form>
                        </div>
                    </div >
                ) : (
                    started ? (
                        <TestForm finishTest={finishTest} />
                    ) : (
                        <div>
                            <h2 className="text-3xl mb-10 text-center text-zinc-700 font-medium relative">
                                <span className="block max-w-28 w-full h-3 rounded-md bg-red-400 absolute right-1/2 -bottom-0.5 z-0" />
                                <span className="relative z-10">
                                    Matematik testlar yordamida o`z bilimingizni sinang:
                                </span>
                            </h2>
                            <p className="max-w-lg mb-12 m-auto text-lg text-center text-slate-700">Sizga 3 ta matematik masala test ko`rinishida beriladi, berilgan vaqt ichida ularning har biriga javob toping.</p>
                            <div className="flex place-content-center">
                                <Button onClick={() => setStarted(true)} status="secondary" className="m-auto text-center">Testni boshlash</Button>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
};

const TestForm = ({ finishTest }: { finishTest: () => void }) => {
    const [questions, setQuestions] = useState(testQuestions)
    const [timeLeft, setTimeLeft] = useState(testTime)
    const [progressWidth, setProgressWidth] = useState(100)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [error, setError] = useState('')

    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((time) => {
                console.log(time);
                if (time === 0) {
                    clearInterval(interval)
                    finishTest()
                }
                else {
                    setProgressWidth(() => Math.floor(time / (testTime / 100)))
                    return time - 1
                }
                return 0
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [testTime])

    const onNext = () => {
        if (selectedAnswer !== null) {
            setError('')

            const newQuestions = testQuestions.map((q, i) => i === questionIndex ? { ...q, answer: selectedAnswer } : q)

            setSelectedAnswer(null)
            setQuestionIndex((index) => index + 1)
            setQuestions([...newQuestions])

            if (questionIndex === 2) {
                finishTest()
            }
        }
        else {
            setError('Iltimos variantlardan birini tanlang!')
        }
    }

    console.log(questions);

    window.onbeforeunload = function () {
        return "Siz sahifani yangilamoqchimisiz? O'zgarishlar saqlanmaydi!";
    }

    return (
        <div className="p-10 w-full">
            <div className="text-left">
                <h2 className="text-2xl mb-8 text-left text-zinc-700 font-medium font-sans">
                    {questionIndex + 1}) {testQuestions[questionIndex].title}
                </h2>
                <ul className="flex w-full flex-col pl-8 mb-14 gap-4">
                    {
                        testQuestions[questionIndex].variants.map((variant, index) => (
                            <li onClick={() => setSelectedAnswer(index)} key={index}>
                                <button className={`w-full text-left font-medium px-4 py-3 rounded-lg border border-dashed border-slate-400 hover:text-red-500 hover:shadow-lg transition-all font-sans ${selectedAnswer === index ? 'bg-red-500 text-white hover:text-white' : 'bg-white text-slate-600'}`}>{variant}</button>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center justify-between px-8">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center mb-3">
                            <span className="text-2xl text-zinc-700 mr-2">
                                <MdOutlineTimer />
                            </span>
                            <strong className="uppercase font-medium text-lg text-red-500 font-mono">
                                {formatTime(timeLeft).toString()}
                            </strong>
                        </div>
                        <div className="max-w-sm w-full rounded-md overflow-hidden border border-slate-600">
                            <span style={{ width: `${progressWidth}%` }} className={`block w-full h-3 rounded-md bg-red-500 transition-all duration-300`}></span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="font-medium text-orange-500 mr-3">{error}</p>
                        <Button disabled={selectedAnswer === null} onClick={onNext} status="secondary">
                            {questionIndex === 2 ? 'Tugatish' : 'Keyingisi'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}