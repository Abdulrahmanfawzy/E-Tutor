import SearchInput from '@/components/common/search-input'
import { BellIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import profile from '@/assets/Ellipse 300.svg'

export default function InstructorNavbar() {
  return (
   <>
   <nav className="flex flex-row  items-center justify-between bg-white px-8 py-2 ">
   <div className="flex flex-col  items-center justify-center  ">
        <p className="text-sm text-muted-foreground">Good Morning</p>
        <h4 className="text-lg font-semibold">Dashboard</h4>
   </div>
    <div className="flex flex-row items-center gap-4">
        <SearchInput  placeholder="Search ...." />
       <button
  type="button"
  aria-label="Notifications"
  className="flex h-9 w-9 items-center justify-center bg-muted text-gray-700 hover:bg-gray-100"
>
  <BellIcon size={16} />
</button>
         <Image src={profile} alt="Profile" width={40} height={40} className="rounded-full" />
        
    </div>
   </nav>
   </>
  )
}
