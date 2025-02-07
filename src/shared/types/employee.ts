export type EmployeeType = {
  id: string;
  fullName: string;
  position: string;
  education: string;
  departments: {
    id: string;
    name: string;
  }[];
  photo?: { sizes?: { thumbnail?: { url: string } } }; // Optional chaining compatibility
};