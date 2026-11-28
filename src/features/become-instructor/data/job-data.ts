export type Position = {
  id: number;
  title: string;
  location: string;
  type: string;
  vacancy: string;
  deadline: string;
};

export type JobDetails = Position & {
  address: string;
  email: string;
  phone: string;
  whoWeAre: string;
  requirements: string[];
  benefits: string[];
  salary: string;
  jobNature: string[];
};

export const positions: Position[] = [
  { id: 1, title: "Product Designer (UI/UX Designer)", location: "Tokyo, Japan", type: "Full-Time", vacancy: "01 Vacancy", deadline: "30 June, 2021" },
  { id: 2, title: "Social Media Manager", location: "Moscow, Russia", type: "Full-Time", vacancy: "01 Vacancy", deadline: "30 June, 2021" },
  { id: 3, title: "Director of Accounting", location: "Mumbai, India", type: "Full-Time", vacancy: "02 Vacancy", deadline: "30 June, 2021" },
  { id: 4, title: "Principal Software Engineer", location: "Tokyo, Japan", type: "Full-Time", vacancy: "01 Vacancy", deadline: "30 June, 2021" },
];

export const jobDetails: JobDetails = {
  ...positions[0],
  address: "1702 Olympic Boulevard, Santa Monica, CA 90404",
  email: "career.rebugsolid@gmail.com",
  phone: "(219) 555-0114",
  whoWeAre:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum enim lectus, porttitor condimentum nisi ac, tempor vulputate nunc. Maecenas ut ligula sed erat viverra facilisis. Nulla non lectus vitae augue lobortis aliquet.",
  requirements: [
    "Vestibulum hendrerit lacinia turpis, porttitor condimentum neque vulputate ut.",
    "Quisque varius leo sit amet, venenatis dolor, laoreet lacus.",
    "Duis volutpat tellus sed purus interdum, eu porta nibh ultricies.",
    "Aliquam varius, eros non euismod, ex ligula blandit sem.",
    "Praesent tempor, justo vel mollis vestibulum, nisl sapien dapibus.",
    "Nam bibendum sapien velit, ut finibus massa laoreet at.",
  ],
  benefits: [
    "Nulla facilisi, integer non euismod libero.",
    "Suspendisse a ligula posuere, venenatis dolor, consectetur.",
    "Quisque varius leo sit amet, venenatis dolor, dignissim ut purus.",
    "Mauris commodo lacinia consequat, vivamus hac habitasse.",
    "Integer bibendum, mauris sed gravida ullamcorper.",
  ],
  salary: "Based on Salary: $90k - $120k (USD) plus Benefits",
  jobNature: [
    "Job Type: Full Time",
    "Office Hours: 9 AM to 6 PM (Sun-Thu), Flexible with Calendar Hours",
    "Location: 1702 Olympic Boulevard, Santa Monica, CA 90404",
  ],
};