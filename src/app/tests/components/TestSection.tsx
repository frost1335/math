'use client'

import ReactInputMask from "react-input-mask"
import Button from "@/components/Button"
import { testQuestions, testTime } from "@/constants";
import { useLayoutEffect, useState } from "react"
import { MdOutlineTimer } from "react-icons/md"
import { useRouter } from "next/navigation";
import { sendMessage } from "@/app/actions";
import { sendMail, sendMailTest } from "@/actions/mail";

const phoneStringLength = 18

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

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
    const [questions, setQuestions] = useState(() => getRandom(testQuestions, 3))

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
        e.preventDefault()


        if (formValidation()) {
            const answers = questions.map((q) => ({
                title: q.title,
                answer: q.answer,
                qstNum: q.qstNum
            }))

            await sendMailTest({ name, phone, answers })

            try {
                const chatId = process.env.NEXT_PUBLIC_CHAT_ID

                // message to inform user test results
                const message = `
<b>Foydalanuvchidan Ariza!</b>

Foydalanuvchi Ismi:  <u>${name}</u>
Foydalanuvchi Tel. raqami:  <u>${phone}</u>

<b>Test javoblari:</b>

${answers.map((question, index) => (
                    `<b>${index + 1}-Savol (№${question.qstNum}):</b>  ${question.title} 

    Tanlangan javob:  <u>${question.answer}</u>`
                )).join('\n\n')
                    }
                `

                const cleanedMessage = message.replace(/<sup>(.*?)<\/sup>|<sub>(.*?)<\/sub>/g, '$1$2');

                // Send the message to the Telegram bot
                await sendMessage(chatId, cleanedMessage);
            }
            catch (err) {
                console.log(err);
            }

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
        <div className="p-4 sm:p-6 md:p-10 py-12 md:py-20 w-full rounded-xl border border-slate-300 shadow-2xl">
            {
                finished ? (
                    <div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-zinc-700 text-center font-semibold text-2xl md:text-3xl mb-10">Natijalaringizni olish uchun pastda ismingiz va telefon raqamingiz qoldiring!</h2>
                            <form onSubmit={onSubmit} className="flex flex-col max-w-sm w-full">
                                <div className="flex flex-col items-start mb-3 md:mb-5">
                                    <label htmlFor="name" className="font-sans text-lg text-slate-600 mb-2">Ism & Familiya <span className="text-red-600">*</span></label>
                                    <input value={name || ''} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border-2 border-slate-300 rounded-md font-medium text-zinc-700 placeholder:text-slate-500 font-sans" type="text" id="name" placeholder="Ism & Familiya" />
                                </div>
                                <div className="flex flex-col items-start mb-3 md:mb-5">
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
                        <TestForm questions={questions} setQuestions={setQuestions} finishTest={finishTest} />
                    ) : (
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-10 text-center text-zinc-700 font-medium relative">
                                <span className="block max-w-28 w-full h-3 rounded-md bg-red-400 absolute left-1/2 -translate-x-1/2 bottom-0 z-0" />
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

const TestForm = ({ finishTest, setQuestions, questions }: { finishTest: () => void, setQuestions, questions }) => {
    const lastItem = questions.length - 1

    const [timeLeft, setTimeLeft] = useState(testTime)
    const [progressWidth, setProgressWidth] = useState(100)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [error, setError] = useState('')

    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((time) => {
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

            const newQuestions = questions.map((q, i) => i === questionIndex ? { ...q, answer: q.variants[selectedAnswer] } : q)

            setSelectedAnswer(null)
            setQuestionIndex((index) => index + 1)
            console.log(newQuestions);
            setQuestions([...newQuestions])

            if (questionIndex === lastItem) {
                finishTest()
            }
        }
        else {
            setError('Iltimos variantlardan birini tanlang!')
        }
    }

    return (
        <div className="md:p-6 lg:p-10 w-full">
            <div className="text-left">
                <h2 className="text-xl md:text-2xl mb-8 text-left text-zinc-700 font-medium font-sans">
                    {questionIndex + 1}) <span dangerouslySetInnerHTML={{ __html: questions[questionIndex].title }}></span>
                </h2>
                <ul className="flex w-full flex-col pl-0 md:pl-8 mb-14 gap-4">
                    {
                        questions[questionIndex].variants.map((variant, index) => (
                            <li onClick={() => setSelectedAnswer(index)} key={index}>
                                <button className={`w-full text-left font-medium px-3    md:px-4 py-3 rounded-lg border border-dashed border-slate-400 hover:text-red-500 hover:shadow-lg transition-all font-sans ${selectedAnswer === index ? 'bg-red-500 text-white hover:text-white' : 'bg-white text-slate-600'}`} dangerouslySetInnerHTML={{ __html: variant }}></button>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center justify-between md:px-8">
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
                            <span style={{ width: `${progressWidth}%` }} className={`block w-full h-2 md:h-3 rounded-md bg-red-500 transition-all duration-300`}></span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="font-medium text-orange-500 mr-3">{error}</p>
                        <Button disabled={selectedAnswer === null} onClick={onNext} status="secondary">
                            {questionIndex === lastItem ? 'Natijalarni ko`rish' : 'Keyingisi'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}