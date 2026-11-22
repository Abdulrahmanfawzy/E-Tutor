import SearchInput from '@/components/common/search-input'
import { BellIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import profile from '@/assets/Ellipse 300.svg'
import { useTranslations } from 'next-intl'

export default function InstructorNavbar() {
  const t= useTranslations("dashboard.navbar")
  return (
   <>
   <nav className="flex flex-row  items-center justify-between bg-white px-8 py-2 ">
   <div className="flex flex-col  items-center justify-center  ">
        <p className="text-sm text-muted-foreground">{t("goodMorning")}</p>
        <h4 className="text-lg font-semibold">{t("dashboard")}</h4>
   </div>
    <div className="flex flex-row items-center gap-4">
        <SearchInput  placeholder={t("searchPlaceholder")} />
       <button
  type="button"
  aria-label={t("notifications")}
  className="flex h-9 w-9 items-center justify-center bg-muted text-gray-700 hover:bg-gray-100 rounded-lg"
>
  <BellIcon size={16}  />
</button>
         <Image src={profile} alt={t("profile")} width={40} height={40} className="rounded-full" />
        
    </div>
   </nav>
   </>
  )
}
