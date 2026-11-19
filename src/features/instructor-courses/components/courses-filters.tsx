import SearchInput from '@/components/common/search-input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

export default function CoursesFilters() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col">
          <SearchInput placeholder="Search in your courses..." />
      </div>
        <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Sort by:</p>
         <Select defaultValue="latest">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="latest">latest</SelectItem>
        <SelectItem value="oldest">oldest</SelectItem>
      </SelectContent>
    </Select>
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Category</p>
         <Select defaultValue="All Categories">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="All Categories">All Categories</SelectItem>
        <SelectItem value="Development">Development</SelectItem>
        <SelectItem value="Design">Design</SelectItem>
        <SelectItem value="Marketing">Marketing</SelectItem>
        <SelectItem value="Business">Business</SelectItem>

      </SelectContent>
    </Select>
        </div>
           <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Rating</p>
         <Select defaultValue="All Ratings">
      <SelectTrigger className=" border-0 text-label-sm shadow-none text-gray-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent >
        <SelectItem value="All Ratings">All Ratings</SelectItem>
        <SelectItem value="4 Stars">3.5 Star & Up</SelectItem>
        <SelectItem value="3 Stars">3.0 Star & Up</SelectItem>
      </SelectContent>
    </Select>
        </div>
    </div>
  )
}
