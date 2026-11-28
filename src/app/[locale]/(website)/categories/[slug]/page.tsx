import CourseCateogoriesContent from "../../../../../features/course-categories/components/course-categories-content"

interface CourseCategoriesProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}
export default async function CategoryPage({
  params,
}: CourseCategoriesProps) {
  const { slug } = await params;

  return <CourseCateogoriesContent categorySlug={slug} />;
}