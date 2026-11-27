import Image from 'next/image'
import visa from "@/assets/images/Subtract.svg";
import { Copy, MoreHorizontal } from 'lucide-react';
import { BankCardData } from '../types/earning.types';
import { useTranslations } from 'next-intl';

export default function BankCard({number,expires,name}:BankCardData) {
   const t = useTranslations("instructorEarning.cards");
  return (
    <>

    <div className="relative flex flex-col w-full overflow-hidden rounded-lg bg-linear-to-br from-purple-500 to-purple-700 p-8 text-white shadow-md">

      {/* Background Decoration */}
      <div className=" pointer-events-none absolute -right-4 -bottom-8 h-40 w-40 rounded-full bg-white/10" />

      {/* Card Header */}
      <div className="relative flex items-center justify-between">
        <Image
          src={visa}
          alt="Visa"
          width={55}
          height={25}
          className="object-contain"
        />

        <button type="button" aria-label={t("options")}>
           <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Card Number */}
      <div className="relative mt-4 flex items-center gap-2">
        <p className="text-sm tracking-wider">
       {number}
        </p>
         <button
    type="button"
    aria-label={t("copy")}
    className="text-white/70 hover:text-white"
  >
    <Copy size={13} />
  </button>
      </div>

      {/* Card Details */}
      <div className="relative mt-3 flex justify-between">
        <div>
          <p className="text-sm text-white/60">{t("expires")}</p>
          <p className="text-sm">{expires}</p>
        </div>

        <div>
          <p className="text-sm text-white/60">{t("cardName")}</p>
          <p className="text-sm">{name}</p>
        </div>
      </div>

    </div>
  
    </>

  )
}
