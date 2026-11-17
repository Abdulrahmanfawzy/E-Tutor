import BestSellingCourses from "./best-selling-courses"
import CourseCatalog from "./course-catalog"
import PopularInstructors from "./popular-instructors"
import PopularKeywords from "./popular-keywords"
import PopularTools from "./popular-tools"

interface IProps {



}

const CourseCateogoriesContent=({}:IProps)=> {
  return (
     <main className="min-h-screen bg-white">
      <div className="mx-auto flex w-full max-w-285 flex-col gap-10 py-10">
        <BestSellingCourses />

        <PopularTools />

        <PopularKeywords />
        
      </div>
      <PopularInstructors />

      {/* Courses Section */}
      <div className="mx-auto flex w-full max-w-285 flex-col gap-10 py-10">

        <CourseCatalog />

        

      </div>
      
    </main>
  )
}

export default CourseCateogoriesContent
// px-4 py-10 md:px-6 lg:px-8   mx-auto w-full max-w-285 px-4