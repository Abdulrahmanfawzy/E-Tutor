import { InstructorDashboardResponse } from './../types/dashboard';


export async function getInstructorDashboard():Promise<InstructorDashboardResponse>{
  const response = await fetch(`${process.env.API}api/v1/instructor/dashboard`,{
    headers: {
        Accept: "application/json",
      Authorization: `Bearer ${process.env.INSTRUCTOR_TOKEN}`,
    },
    
  })
  const data:InstructorDashboardResponse = await response.json();

  if(!response.ok){
    throw new Error(data.message);
  }
 
return data;
 
}