"use client"
import { HeroImg1, HeroImg2, Teacher1, Teacher1Over, Teacher2, Teacher2Over } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { TbMathFunction } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import ScrollButton from "./ScrollButton";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { INSTAGRAM_LINK, PHONE_LINK, TELEGRAM_LINK } from "@/constants";
import { MdMail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { sendMessage } from "@/app/actions";
import ReactInputMask from "react-input-mask"

const phoneStringLength = 18

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState<string | null>('')
  const [phone, setPhone] = useState<string | null>('+998')
  const [error, setError] = useState('')
  
  const formValidation = () => {
        return name && (phone?.length === phoneStringLength)
    }

  const onSubmit = async (e) => {
        e.preventDefault()

        if (formValidation()) {
            try {
                const chatId = process.env.NEXT_PUBLIC_CHAT_ID

                // message to inform user test results
                const message = `
<b>Batafsil Ma'lumotlar uchun Foydalanuvchidan Ariza!</b>

Foydalanuvchi Ismi:  <u>${name}</u>
Foydalanuvchi Tel. raqami:  <u>${phone}</u>
                `
                // Send the message to the Telegram bot
                await sendMessage(chatId, message);
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
    <div id="home">
      <header className="relative w-full min-h-screen bg-red-600 flex flex-col items-center justify-center">
        <div className="container max-w-7xl m-auto absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex justify-between pb-20 py-12">
          <div className="flex md:flex-col gap-4 absolute right-4 top-4 md:right-auto md:left-5 md:top-28">
            <a className="text-2xl text-white p-2 hover:text-yellow-400 transition-all" target="_blank" href={TELEGRAM_LINK}>
              <BsTelegram />
            </a>
            <a className="text-2xl text-white p-2 hover:text-yellow-400 transition-all" target="_blank" href={INSTAGRAM_LINK}>
              <RiInstagramFill />
            </a>
            <a className="text-2xl text-white p-2 hover:text-yellow-400 transition-all" href={PHONE_LINK}>
              <FaPhone />
            </a>
          </div>
          <div className="self-end hidden md:block">
            <Image src={HeroImg1} alt="math-innovation" className="object-cover overflow-hidden w-[200px] h-[250px] xl:w-[250px] xl:h-[330px] shadow-xl" width={250} height={300} />
          </div>
          <div className="hidden md:block">
            <Image src={HeroImg2} alt="math-innovation" className="object-cover overflow-hidden w-[200px] h-[250px] xl:w-[250px] xl:h-[330px] shadow-xl" width={250} height={300} />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <Link href={'/'} className="font-semibold text-3xl font-mono text-white flex flex-col md:flex-row items-center justify-center mb-6">
            <span className="block text-4xl text-yellow-500 mr-2">
              <TbMathFunction />
            </span>
            <span className="inline text-center">
              Innovatsion Matematika
            </span>
          </Link>
          <h1 className="font text-white text-base md:text-xl mb-6 text-center max-w-4xl leading-normal tracking-wider">
            Matematikani chuqur o’rganishingizga va keying bosqichga o’tishingizda Xalqaro matematika olimpiadasining g’oliblari tomonidan ishlab chiqilgan testda sizga yordam beradi.
          </h1>
          <Link href={'/tests'}>
            <Button>
              Bilimingizni tekshiring
            </Button>
          </Link>
        </div>
        <ScrollButton elem="about">Kitob haqida</ScrollButton>
      </header>

      <main id="about" className="container max-w-7xl m-auto">

        <section className="py-24 md:py-32 flex flex-col items-center px-3 md:px-6">
          <h2 className="text-3xl md:text-4xl text-slate-700 font-medium text-center mb-8 md:mb-14">Innovatsion matematika kitobi kimlar uchun: </h2>
          <ul className="flex flex-col max-w-3xl gap-6 md:gap-8 list-disc pl-8 md:pl-16">
            <li className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed relative">
              <span className="block max-w-24 w-full h-3 rounded-md bg-yellow-300 absolute left-2 bottom-0.5 z-0" />
              <span className="relative z-10">
                Abitruyentlar
              </span>
            </li>
            <li className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              Iqtidorli yoshlar va olimpiadachilar
            </li>
            <li className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              Milliy sertifikat uchun talabgorlar
            </li>
            <li className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed relative">
              <span className="block max-w-32 w-full h-3 rounded-md bg-red-400 absolute left-16 top-5 md:top-auto md:bottom-0.5 z-0" />
              <span className="relative z-10">
                Attestatsiyaga tayyorlayotgan va o’z bilimini oshirib ko’proq daromad qilishni istaydigan o’qituvchilar uchun
              </span>
            </li>
          </ul>
        </section>
      </main>
      <main id="authors" className="py-14 md:py-20 bg-red-600 px-4 md:px-6">

        <div className="container max-w-7xl m-auto">
          <h2 className="text-3xl md:text-4xl text-white font-medium text-center mb-16">Mualiflar haqida:</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-0">
            <div className="lg:max-w-[80%] pl-8 md:pl-0 order-2 md:order-1">
              <ul className="flex flex-col gap-6 list-disc">
                <li className="text-slate-100 md:text-lg leading-loose">
                  Ko’p yillik tajribali trener, bir nechta o’quv qo’llanmalari va darsliklar muallifi, fan olimpiadalari va iqtidorli yoshlar bilan ishlash bo’yicha ekspert;
                </li>
                <li className="text-slate-100 md:text-lg leading-loose">
                  1999-yil Ruminiyada o’tkazilgan 40-Xalqaro Matematika Olimpiadasining(IMO) eng yosh ishtirokchilaridan biri;
                </li>
                <li className="text-slate-100 md:text-lg leading-loose">
                  2000-yil Janubiy Koreyada o’tkazilgan 41-Xalqaro Matematika Olimpiadasining bronza medali sohibi;
                </li>
                <li className="text-slate-100 md:text-lg leading-loose">
                  2001-yil AQShda o’tkazilgan 42-xalqaro Matematika Olimpiadasining kumush medali sovrindori.
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center justify-center md:justify-start md:ml-6 mb-6">
                <div className="relative">
                  <Image src={Teacher2} alt="teacher-icon" className="w-[230px] h-[300px] object-cover shadow-2xl" width={200} height={300} />
                  <Image src={Teacher2Over} alt="teacher-icon" className="absolute opacity-0 hover:opacity-100 top-0 left-0 z-10 w-[230px] h-[300px] object-cover shadow-2xl transition-all duration-300" width={200} height={300} />
                </div>
              </div>
              <h3 className="text-3xl text-slate-100 font-medium mb-6 relative">
                <span className="block max-w-24 w-full h-3 rounded-md bg-yellow-400 absolute left-16 bottom-0 z-0" />
                <span className="relative z-10">
                  Raxmonov Umid Olimovich
                </span>
              </h3>
              <p className="text-slate-200 leading-normal max-w-[90%] mb-4">
                - 30ga yaqin shogirdlari Respublika olimpiadalari handa Ispaniya, Vietnam, Gollandiya Tailand, Gongkong, Braziliya, Ruminiya, Buyuk Britaniya, Rossiya va Qozog’istonda tashkil qilingan nufuzli xalqaro matematika olimpiadalarining sovrindori bo’lgan;
              </p>
              <p className="text-slate-200 leading-normal max-w-[90%] mb-4">
                - Yuqoridagi xizmatlari uchun &quot;Xalq ta’limi a’lochisi&quot; (2008 y);
              </p>
              <p className="text-slate-200 leading-normal max-w-[90%] mb-4">
                - &quot;O’rta maxsus kasb-hunar ta’limi a’lochisi&quot; (2015 y) ko’krak nishoni;
              </p>
              <p className="text-slate-200 leading-normal max-w-[90%]">
                - Davlatimiz Rahbari tomonidan &quot;Shuhrat&quot; medali (2019 y) bilan taqdirlangan.
              </p>
            </div>
          </div>

        </div>
      </main>
      <main className="py-16 md:py-24 px-4 md:px-6">
        <div className="container max-w-7xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-0">
            <div>
              <div className="flex items-center justify-center md:justify-start md:ml-6 mb-6">
                <div className="relative">
                  <Image src={Teacher1} alt="teacher-icon" className="w-[230px] h-[300px] object-cover shadow-2xl" width={200} height={300} />
                  <Image src={Teacher1Over} alt="teacher-icon" className="absolute opacity-0 hover:opacity-100 top-0 left-0 z-10 w-[230px] h-[300px] object-cover shadow-2xl transition-all duration-300" width={200} height={300} />
                </div>
              </div>
              <h3 className="text-3xl text-slate-700 font-medium mb-6 relative">
                <span className="block max-w-24 w-full h-3 rounded-md bg-red-400 absolute left-16 bottom-0 z-0" />
                <span className="relative z-10">
                  Boltayev O’tkir Xudayberiyevich
                </span>
              </h3>
              <p className="text-slate-700 leading-normal max-w-[90%] mb-6">
                - Malakali matematika fani o’qituvchisi, fan olimpiadalari va iqtidorli yoshlar bilan ishlash bo’yicha ekspert.
              </p>
              <p className="text-slate-700 leading-normal max-w-[90%]">
                - Hozirgi kunda matematika fanidan xalqaro olimpiadalarda ishtirok etuvchi O’zbekiston terma jamoasi rahbari sifatida faoliyat yuritib kelmoqda.
              </p>
            </div>
            <div className="lg:max-w-[80%] pl-8 md:pl-0">
              <ul className="flex flex-col gap-5 list-disc">
                <li className="text-slate-600 md:text-lg leading-loose">
                  2006-yilda Sloveniyada o’tkazilgan 47-Xalqaro Matematika Olimpiadasining(IMO) bronza medali sohibi;
                </li>
                <li className="text-slate-600 md:text-lg leading-loose">
                  2007-yil Vietnamda o’tkazilgan 48-Xalqaro Matematika Olimpiadasining kumush medali sovrindori;
                </li>
                <li className="text-slate-600 md:text-lg leading-loose">
                  10ga yaqin shogirdlari Respublika olimpiadalari hamda Ispaniya, Gollandiya, Buyuk Britaniya, Rossiya va Qozog’istonda tashkil qilingan nufuzli xalqaro matematika olimpiadalarining sovrindorlari bo’lgan;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <main className="py-16 md:py-24 px-4 md:px-6">
      <div className="flex flex-col items-center">
          <h2 className="text-zinc-700 text-center font-semibold text-2xl md:text-3xl mb-10">Kitob xaqida batafsil ma'lumot olish uchun Ism va Telefon raqamingiz qoldiring!</h2>
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
    </div>
  );
}
