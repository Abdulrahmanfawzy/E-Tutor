  import { NextRequest, NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const unread = request.nextUrl.searchParams.get("unread");

//   const query = unread ? `?unread=${unread}` : "";

//   const response = await fetch(
//     `${process.env.API}api/v1/notifications${query}`,
//     {
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${process.env.TOKEN}`,
//       },
//       cache: "no-store",
//     }
//   );

//   const data = await response.json();

//   return NextResponse.json(data, { status: response.status });
// }


export async function GET(request: NextRequest) {
  try {
    const unread = request.nextUrl.searchParams.get("unread");
    const query = unread ? `?unread=${unread}` : "";

    const response = await fetch(
      `${process.env.API}api/v1/notifications${query}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    console.log("Notifications status:", response.status);
    console.log("Notifications response:", data);

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Notifications route error:", error);

    return NextResponse.json(
      { message: "Failed to fetch notifications" },
      { status: 500 }
    );
  }
}