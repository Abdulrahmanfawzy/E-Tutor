import { InstructorCoursesResponse } from "@/features/instructor-courses/types/instructor-courses";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search") || "";
  const page = request.nextUrl.searchParams.get("page") || "1";
  const per_page = request.nextUrl.searchParams.get("per_page") || "12";

  const params = new URLSearchParams();

  if (search) params.append("search", search);

  params.append("page", page);
  params.append("per_page", per_page);

  
  try {
  const response = await fetch(
    `${process.env.API}api/v1/instructor/courses?${params.toString()}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();

  console.log("Courses status:", response.status);
  console.log("Courses response:", data);

  return NextResponse.json(data, { status: response.status });
} catch (error) {
  console.error("Courses route error:", error);

  return NextResponse.json(
    { message: "Failed to fetch courses" },
    { status: 500 }
  );
}
}