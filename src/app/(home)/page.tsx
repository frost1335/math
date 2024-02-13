import { HeroImg1, HeroImg2, Teacher1, Teacher2 } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { TbMathFunction } from "react-icons/tb";
import ScrollButton from "./ScrollButton";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { INSTAGRAM_LINK, MAIL_LINK, TELEGRAM_LINK } from "@/constants";
import { MdMail } from "react-icons/md";

export default function Home() {
  return (
    <div id="home">
      <header className="relative w-full min-h-screen bg-red-600 flex flex-col items-center justify-center">
        <div className="container max-w-7xl m-auto absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex justify-between pb-20 py-12">
          <div className="flex flex-col gap-4 absolute left-5 top-28">
            <a className="text-2xl text-white p-2 hover:text-yellow-400 transition-all" target="_blank" href={TELEGRAM_LINK}>
              <BsTelegram />
            </a>
            <a className="text-2xl text-white p-2 hover:text-yellow-400 transition-all" target="_blank" href={INSTAGRAM_LINK}>
              <RiInstagramFill />
            </a>
            <a className="text-2xl text-white p-2 hover:text-yellow-400 transition-all" target="_blank" href={MAIL_LINK}>
              <MdMail />
            </a>
          </div>
          <div className="self-end">
            <Image src={HeroImg1} alt="math-innovation" className="object-cover overflow-hidden w-[250px] h-[330px] shadow-xl" width={250} height={300} />
          </div>
          <div>
            <Image src={HeroImg2} alt="math-innovation" className="object-cover overflow-hidden w-[250px] h-[330px] shadow-xl" width={250} height={300} />
          </div>
        </div>
        <div className="relative z-30 flex flex-col items-center">
          <Link href={'/'} className="font-semibold text-3xl font-mono text-white flex items-center justify-center mb-6">
            <span className="block text-4xl text-yellow-500 mr-2">
              <TbMathFunction />
            </span>
            Innovatsion Matematika
          </Link>
          <h1 className="font text-white text-xl mb-6 text-center max-w-4xl leading-normal tracking-wider">
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

        <section className="py-28 flex flex-col items-center px-6">
          <h2 className="text-4xl text-slate-700 font-medium text-center mb-10">Innovatsion matematika kitobi kimlar uchun: </h2>
          <ul className="flex flex-col max-w-3xl gap-4 list-disc pl-16">
            <li className="text-2xl text-slate-600 font-medium leading-relaxed relative">
              <span className="block max-w-24 w-full h-3 rounded-md bg-yellow-300 absolute left-2 bottom-0.5 z-0" />
              <span className="relative z-10">
                Abitruyentlar
              </span>
            </li>
            <li className="text-2xl text-slate-600 font-medium leading-relaxed">
              Iqtidorli yoshlar va olimpiadachilar
            </li>
            <li className="text-2xl text-slate-600 font-medium leading-relaxed">
              Milliy sertifikat uchun talabgorlar
            </li>
            <li className="text-2xl text-slate-600 font-medium leading-relaxed relative">
              <span className="block max-w-32 w-full h-3 rounded-md bg-red-400 absolute left-16 bottom-0.5 z-0" />
              <span className="relative z-10">
                Attestatsiyaga tayyorlayotgan va o’z bilimini oshirib ko’proq daromad qilishni istaydigan o’qituvchilar uchun
              </span>
            </li>
          </ul>
        </section>
      </main>
      <main className="py-20 bg-red-600 px-6">
        <div className="container max-w-7xl m-auto">
          <h2 className="text-4xl text-white font-medium text-center mb-16">Mualiflar haqida:</h2>
          <div className="grid grid-cols-2 items-center">
            <div>
              <div className="flex items-center ml-6 mb-6">
                <Image src={Teacher1} alt="teacher-icon" className="w-[230px] h-[300px] object-cover shadow-xl" width={200} height={300} />
              </div>
              <h3 className="text-3xl text-white font-medium mb-6 relative">
                <span className="block max-w-24 w-full h-3 rounded-md bg-yellow-400 absolute left-5 -bottom-1 z-0" />
                <span className="relative z-10">
                  Boltayev O’tkir Xudayberiyevich
                </span>
              </h3>
              <p className="text-slate-100 leading-normal max-w-[90%] mb-6">
                - Malakali matematika fani o’qituvchisi, fan olimpiadalari va iqtidorli yoshlar bilan ishlash bo’yicha ekspert.
              </p>
              <p className="text-slate-100 leading-normal max-w-[90%]">
                - Hozirgi kunda matematika fanidan xalqaro olimpiadalarda ishtirok etuvchi O’zbekiston terma jamoasi rahbari sifatida faoliyat yuritib kelmoqda.
              </p>
            </div>
            <div className="max-w-[80%]">
              <ul className="flex flex-col gap-5 list-disc">
                <li className="text-slate-200 text-lg">
                  2006-yilda Sloveniyada o’tkazilgan 47-Xalqaro Matematika Olimpiadasining(IMO) bronza medali sohibi;
                </li>
                <li className="text-slate-200 text-lg">
                  2007-yil Vietnamda o’tkazilgan 48-Xalqaro Matematika Olimpiadasining kumush medali sovrindori;
                </li>
                <li className="text-slate-200 text-lg">
                  10ga yaqin shogirdlari Respublika olimpiadalari hamda Ispaniya, Gollandiya, Buyuk Britaniya, Rossiya va Qozog’istonda tashkil qilingan nufuzli xalqaro matematika olimpiadalarining sovrindorlari bo’lgan;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <main className="py-24 px-6">
        <div className="container max-w-7xl m-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="max-w-[80%]">
              <ul className="flex flex-col gap-4 list-disc">
                <li className="text-slate-700 text-lg">
                  Ko’p yillik tajribali trener, bir nechta o’quv qo’llanmalari va darsliklar muallifi, fan olimpiadalari va iqtidorli yoshlar bilan ishlash bo’yicha ekspert;
                </li>
                <li className="text-slate-700 text-lg">
                  1999-yil Ruminiyada o’tkazilgan 40-Xalqaro Matematika Olimpiadasining(IMO) eng yosh ishtirokchilaridan biri;
                </li>
                <li className="text-slate-700 text-lg">
                  2000-yil Janubiy Koreyada o’tkazilgan 41-Xalqaro Matematika Olimpiadasining bronza medali sohibi;
                </li>
                <li className="text-slate-700 text-lg">
                  2001-yil AQShda o’tkazilgan 42-xalqaro Matematika Olimpiadasining kumush medali sovrindori.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center ml-6 mb-6">
                <Image src={Teacher2} alt="teacher-icon" className="w-[230px] h-[300px] object-cover shadow-xl" width={200} height={300} />
              </div>
              <h3 className="text-3xl text-slate-700 font-medium mb-6 relative">
                <span className="block max-w-24 w-full h-3 rounded-md bg-red-400 absolute left-5 -bottom-1 z-0" />
                <span className="relative z-10">
                  Raxmonov Umid Olimovich
                </span>
              </h3>
              <p className="text-slate-600 leading-normal max-w-[90%] mb-4">
                - 30ga yaqin shogirdlari Respublika olimpiadalari handa Ispaniya, Vietnam, Gollandiya Tailand, Gongkong, Braziliya, Ruminiya, Buyuk Britaniya, Rossiya va Qozog’istonda tashkil qilingan nufuzli xalqaro matematika olimpiadalarining sovrindori bo’lgan;
              </p>
              <p className="text-slate-600 leading-normal max-w-[90%] mb-4">
                - Yuqoridagi xizmatlari uchun &quot;Xalq ta’limi a’lochisi&quot; (2008 y);
              </p>
              <p className="text-slate-600 leading-normal max-w-[90%] mb-4">
                - &quot;O’rta maxsus kasb-hunar ta’limi a’lochisi&quot; (2015 y) ko’krak nishoni;
              </p>
              <p className="text-slate-600 leading-normal max-w-[90%]">
                - Davlatimiz Rahbari tomonidan &quot;Shuhrat&quot; medali (2019 y) bilan taqdirlangan.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
