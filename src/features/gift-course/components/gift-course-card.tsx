import Image from "next/image"
import courseImage from "../../../assets/ff5e0cbc2d6f528a1285fdd6a03f985c1b8edde1.png"
const GiftCourseCard = () => {
  return (
    <div className="p-6 border border-gray-100 bg-white flex flex-col gap-6">

        {/* course details */}
        <div className="flex flex-col gap-4">
            <span className="text-lg font-medium">
                Course
            </span>

            <div className="flex gap-3 ">
                <Image
                    src={courseImage}          
                    alt="Course image"
                    width={100}                
                    height={76}                
                    
                />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-400 flex gap-1.5 text-[12px] font-normal">Course By : <span className="text-gray-700">Courtney Henry</span></p>
                        <p className="text-sm font-normal text-gray-900">Graphic Design Masterclass - Learn GREAT Design</p>
                    </div>
                    <span className="text-sm text-orange-400 font-medium">$13.00</span>
                </div>
            </div>
        </div>

        {/* price */}
        <div className="flex flex-col gap-4">
            <p className="text-lg font-medium text-gray-900">Order Summrey</p>
            
            <div className="self-stretch flex items-center justify-between">
                <span className="text-sm font-normal text-gray-600">Subtotal</span>
                <span className="text-sm font-medium text-gray-900 ">$61.97 USD</span>
            </div>

            <div className="self-stretch flex items-center justify-between">
                <span className="text-sm font-normal text-gray-600">Coupon Discount</span>
                <span className="text-sm font-medium text-gray-900 ">8%</span>
            </div>

            <hr className="border border-gray-100"/>

            <div className="self-stretch flex items-center justify-between">
                <span className="text-label-lg font-normal text-gray-900 ">Total</span>
                <span className="text-2xl font-semibold text-gray-900 ">$75.00 USD</span>
            </div>
        </div>

        {/* button */}
        <button className="text-lg text-white font-semibold self-stretch h-14 cursor-pointer bg-orange-400"
            >
            Complete Payment
        </button>

    </div>
  )
}

export default GiftCourseCard