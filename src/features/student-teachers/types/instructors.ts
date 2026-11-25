export interface InstructorListItem {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  studentsCount: number;
}

export interface SelectOption {
  value: string;
  label: string;
}