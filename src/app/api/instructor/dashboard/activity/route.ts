import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const filter = request.nextUrl.searchParams.get("filter") || "week";
   const limit = request.nextUrl.searchParams.get("limit") || "4";
  const response = await fetch(
    `${process.env.API}api/v1/instructor/dashboard/activity?filter=${filter}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}