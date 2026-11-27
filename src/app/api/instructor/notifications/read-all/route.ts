import { NextResponse } from "next/server";

export async function PATCH() {
  const response = await fetch(
    `${process.env.API}api/v1/notifications/read-all`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.INSTRUCTOR_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}