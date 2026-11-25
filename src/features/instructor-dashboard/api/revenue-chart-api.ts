import { RevenueChartResponse } from "../types/revenue";

export async function getRevenue(period: string) {

    const response = await fetch(`${process.env.API}api/v1/instructor/dashboard/revenue?period=${period}`,{
        headers:{
              Accept: "application/json",
      Authorization: `Bearer ${process.env.INSTRUCTOR_TOKEN}`,
        }
    });
    const data: RevenueChartResponse= await response.json();

    if(!response.ok){
        throw new Error(data.message);
    }

    return data;
}