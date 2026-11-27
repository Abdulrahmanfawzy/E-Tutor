import { InstructorListItem, SelectOption } from "../types/instructors";

const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&h=500&q=75`;

export const instructorsTotal = 241;

export const instructors: InstructorListItem[] = [
  { id: "1", name: "Wade Warren", role: "Digital Product Designer", avatarUrl: photo("photo-1500648767791-00dcc994a43e"), rating: 5.0, studentsCount: 236568 },
  { id: "2", name: "Bessie Cooper", role: "Senior Developer", avatarUrl: photo("photo-1507003211169-0a1dd7228f2d"), rating: 4.9, studentsCount: 211434 },
  { id: "3", name: "Floyd Miles", role: "UI/UX Designer", avatarUrl: photo("photo-1472099645785-5658abf4ff4e"), rating: 4.8, studentsCount: 435671 },
  { id: "4", name: "Ronald Richards", role: "Lead Developer", avatarUrl: photo("photo-1494790108377-be9c29b29330"), rating: 4.5, studentsCount: 1356236 },
  { id: "5", name: "Devon Lane", role: "Senior Developer", avatarUrl: photo("photo-1519345182560-3f2917c472ef"), rating: 4.8, studentsCount: 854 },
  { id: "6", name: "Robert Fox", role: "UI/UX Designer", avatarUrl: photo("photo-1438761681033-6461ffad8d80"), rating: 4.2, studentsCount: 197637 },
  { id: "7", name: "Kathryn Murphy", role: "Adobe Instructor", avatarUrl: photo("photo-1544005313-94ddf0286df2"), rating: 4.8, studentsCount: 197637 },
  { id: "8", name: "Jerome Bell", role: "Adobe Instructor", avatarUrl: photo("photo-1506794778202-cad84cf45f1d"), rating: 4.4, studentsCount: 2711 },
];

export const courseFilterOptions: SelectOption[] = [
  { value: "all", label: "All Courses" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "business", label: "Business" },
];

export const teacherFilterOptions: SelectOption[] = [
  { value: "all", label: "All Teachers" },
  ...instructors.map(({ id, name }) => ({ value: id, label: name })),
];