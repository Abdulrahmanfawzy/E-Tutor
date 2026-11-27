import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const period = request.nextUrl.searchParams.get("period") || "month";

  const response = await fetch(
    `${process.env.API}api/v1/instructor/dashboard/revenue?period=${period}`,
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