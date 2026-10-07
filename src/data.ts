// The data for these exercises.
//
// These are ordinary objects held in memory. The rows are copied from the
// university database (the department and instructor tables), the same
// database you will query for real in unit 6. The interfaces will not change
// when the rows start coming from PostgreSQL instead.
//
// You do not need to edit this file, but read it before you start.

export interface Department {
  deptName: string;
  building: string;
  budget: number;
}

export interface Instructor {
  id: string;
  name: string;
  deptName: string;
  salary: number;
}

export const departments: Department[] = [
  { deptName: 'Biology', building: 'Watson', budget: 90000 },
  { deptName: 'Comp. Sci.', building: 'Taylor', budget: 100000 },
  { deptName: 'Elec. Eng.', building: 'Taylor', budget: 85000 },
  { deptName: 'Finance', building: 'Painter', budget: 120000 },
  { deptName: 'History', building: 'Painter', budget: 50000 },
  { deptName: 'Music', building: 'Packard', budget: 80000 },
  { deptName: 'Physics', building: 'Watson', budget: 70000 },
];

export const instructors: Instructor[] = [
  { id: '10101', name: 'Srinivasan', deptName: 'Comp. Sci.', salary: 65000 },
  { id: '12121', name: 'Wu', deptName: 'Finance', salary: 90000 },
  { id: '15151', name: 'Mozart', deptName: 'Music', salary: 40000 },
  { id: '22222', name: 'Einstein', deptName: 'Physics', salary: 95000 },
  { id: '32343', name: 'El Said', deptName: 'History', salary: 60000 },
  { id: '33456', name: 'Gold', deptName: 'Physics', salary: 87000 },
  { id: '45565', name: 'Katz', deptName: 'Comp. Sci.', salary: 75000 },
  { id: '58583', name: 'Califieri', deptName: 'History', salary: 62000 },
  { id: '76543', name: 'Singh', deptName: 'Finance', salary: 80000 },
  { id: '76766', name: 'Crick', deptName: 'Biology', salary: 72000 },
  { id: '83821', name: 'Brandt', deptName: 'Comp. Sci.', salary: 92000 },
  { id: '98345', name: 'Kim', deptName: 'Elec. Eng.', salary: 80000 },
];
