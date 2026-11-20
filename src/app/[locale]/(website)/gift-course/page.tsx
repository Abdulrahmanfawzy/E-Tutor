// import GiftCourseContainer from "@/gift-course/components/gift-course-container"
// import GiftCourseHeader from "@/gift-course/components/gift-course-header"

import GiftCourseContainer from "@/features/gift-course/components/gift-course-container"
import GiftCourseHeader from "@/features/gift-course/components/gift-course-header"


const page = () => {
  return (
    <>
      <GiftCourseHeader />
      <GiftCourseContainer />
    </>
  )
}

export default page