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
const buildingName: string = "Main Hall";
let salary: number = 45000;

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
  throw new Error('not implemented');
}

// --- 1c. Loops ------------------------------------------------------------

/**
 * The names of all instructors in the given department, in the order they
 * appear in the instructors array. Use a for ... of loop.
 */
export function instructorsIn(deptName: string): string[] {
  // TODO
  throw new Error('not implemented');
}

/**
 * The budgets of all departments added together.
 */
export function totalBudget(): number {
  // TODO
  throw new Error('not implemented');
}

// --- 1d. Objects and interfaces -------------------------------------------

/**
 * Finds an instructor by id. Returns undefined when there is no such
 * instructor. Note what the return type tells the caller.
 */
export function findInstructor(id: string): Instructor | undefined {
  // TODO
  throw new Error('not implemented');
}

/**
 * The department an instructor belongs to, or undefined when either the
 * instructor or the department cannot be found. You need both arrays.
 */
export function departmentOf(instructorId: string): Department | undefined {
  // TODO
  throw new Error('not implemented');
}

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
