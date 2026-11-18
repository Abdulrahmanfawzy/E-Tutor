import GiftCourseCard from "./gift-course-card"
import PaymentMethod from "./payment-method"
import RecipientInformation from "./recipient-information"

const GiftCourseContainer = () => {
  return (
    <div className="mx-75 py-20 flex gap-34 items-start">

        <div className=" grow flex flex-col gap-6">
            <h1 className="text-3xl font-semibold text-gray-900">Gift Course</h1>
            <RecipientInformation />
            <PaymentMethod />
        </div>

        <GiftCourseCard />
        
    </div>
  )
}

export default GiftCourseContainer