// Task 1 - the basics (lesson 2.1)
//
// Fill in each function where it says TODO. Do not change the signatures:
// the parameter types and the return types are part of the exercise.
//
// Build and run with:   npm run build   then   npm start

import { Department, Instructor, departments, instructors } from './data.js';

// --- 1a. Variables and types ----------------------------------------------

// Declare a constant holding the name of a building, annotated as a string.
// Then declare a variable holding a salary, which you will change later.
// Which of the two needs const, and which needs let?

// TODO: your two declarations here
const buildingName: string = "Watson"; //The type only describes what kind of value is allowed. The value is the thing the constant actually holds, and since a const can never be reassigned later, there would be no way to give it one afterwards.
let salary: number = 45000; //let allows you to declare without a value (let salary: number;), but then it's undefined until you assign something, and TypeScript will complain if you read it before then. Since the task says it should hold a salary, give it one, such as 65000.

// salary = "high"; // this line should make the compiler complain

// Then try these two lines, read the errors, and remove them again:
//   yourBuilding = 'Painter';      (assigning to a const)
//   yourSalary = 'a lot';          (a string into a number)
// i get Found 1 error in src/basics.ts:20: error TS2322: Type 'string' is not assignable to type 'number'.

// --- 1b. Functions --------------------------------------------------------

/**
 * The salary band of an instructor:
 *   below 60000      -> 'low'
 *   60000 to 89999   -> 'mid'
 *   90000 and above  -> 'high'
 */
export function salaryBand(salary: number): string {
  // TODO
  if (salary < 60000) {
    return 'low';
  } else if (salary < 90000) {
    return 'mid';
  } else if (salary >= 90000) {
    return 'high';
  }
  
  throw new Error('not implemented');
  
}

/**
 * One line describing an instructor, in this exact form:
 *
 *     10101  Srinivasan (Comp. Sci.), 65000 kr
 *
 * Two spaces after the id. Use a template literal.
 */
export function describeInstructor(instructor: Instructor): string {
  // TODO
  return `${instructor.id}  ${instructor.name} (${instructor.deptName}), ${instructor.salary} kr`;
  //throw new Error('not implemented');
}


// --- 1c. Loops ------------------------------------------------------------

/**
 * The names of all instructors in the given department, in the order they
 * appear in the instructors array. Use a for ... of loop.
 */
export function instructorsIn(deptName: string): string[] {
  const names: string[] = [];  // the list we will return
  for (const instructor of instructors) {   // loop through all instructors
    if (instructor.deptName === deptName) {   // check if the department matches
      names.push(instructor.name);   // add to the list, don't return yet
    }
  }
  return names;                      // return once, after the loop is done
}

/**
 * The budgets of all departments added together.
 */
export function totalBudget(): number {   
  let total: number = 0;    // the total we will return, starting at 0
  for (const department of departments) {   // loop through all departments
    total += department.budget;   // add the budget to the total, don't return yet
  }
  return total;   // return the total budget once, after the loop is done
}

// --- 1d. Objects and interfaces -------------------------------------------

/**
 * Finds an instructor by id. Returns undefined when there is no such
 * instructor. Note what the return type tells the caller.
 */
export function findInstructor(id: string): Instructor | undefined {
  for (const instructor of instructors) {   // loop through all instructors
    if (instructor.id === id) {   // check if the id matches
      return instructor;  // found it, return the object
    }
  }
  return undefined;  // not found
}

/**
 * The department an instructor belongs to, or undefined when either the
 * instructor or the department cannot be found. You need both arrays.
 */
export function departmentOf(instructorId: string): Department | undefined {
  for (const department of departments) {   // loop through all departments
    for (const instructor of instructors) {   // loop through all instructors
      if (instructor.id === instructorId && instructor.deptName === department.deptName) {   // check if the id matches and the department matches
  
        return department;  // found it, return the object
      }
    }
  }
  return undefined;  // not found
}

// this version works too,
// export function departmentOf(instructorId: string): Department | undefined {
//   const instructor = findInstructor(instructorId);
//   if (instructor === undefined) {
//     return undefined;
//   }
//   for (const department of departments) {
//     if (department.deptName === instructor.deptName) {
//       return department;
//     }
//   }
//   return undefined;
// }

// --- 1e. Errors -----------------------------------------------------------

/**
 * The department with the given name.
 * Unlike departmentOf, this one throws an Error when there is no such
 * department, with a message naming what was not found.
 */
export function getDepartment(deptName: string): Department {
  // TODO
  throw new Error('not implemented');
}

// After writing it, wrap a call to getDepartment('Nursing') in try and catch
// in index.ts, and print the message instead of letting the program stop.
//
// Then answer these three questions, in a comment here or out loud with the
// person next to you:
//
//   1. What must the caller of departmentOf do before it can use the result?
//      What does the compiler force, and what would happen without it?
//   2. What happens to the caller of getDepartment when the name is wrong and
//      nothing catches the error?
//   3. Name a situation where not finding something is a perfectly normal
//      outcome, and one where it means something has gone wrong. Does that
//      suggest which of the two styles suits which situation?
