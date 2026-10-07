// Task 3 - beyond the basic types (lesson 2.3)
//
// Types built out of other types: a name for a type, a fixed set of values,
// a value that may be missing, and the three dots.

import { Department, Instructor, departments } from './data.js';

// --- 3a. A type alias and literal types -----------------------------------

/**
 * A rank is one of exactly three words. Nothing else may be assigned.
 */
export type Rank = 'assistant' | 'associate' | 'professor';

/**
 * The rank an instructor holds, by salary:
 *   below 70000      -> 'assistant'
 *   70000 to 89999   -> 'associate'
 *   90000 and above  -> 'professor'
 *
 * When it works, try returning 'lecturer' and read the error. the compiler says: Type '"lecturer"' is not assignable to type 'Rank'.
 */
export function rankOf(salary: number): Rank {
  if (salary < 70000) {
    return 'assistant';
  } else if (salary < 90000) {
    return 'associate';
  } else if (salary >= 90000) {
    return 'professor';
  }
  // TODO
  throw new Error('not implemented');
}

// --- 3b. A value that may be missing --------------------------------------

/**
 * Describes a budget that may not be known:
 *   null   -> 'budget not set'
 *   50000  -> 'budget 50000 kr'
 *
 * The compiler will not let you use the number until you have ruled out
 * null. That check is called narrowing.
 */
export function describeBudget(budget: number | null): string {
  typeof budget === 'number';  // narrow the type to number
  if (budget === null) {
    return 'budget not set';
  }
  return `budget ${budget} kr`;
}

// --- 3c. Destructuring ----------------------------------------------------

/**
 * 'Srinivasan of Comp. Sci.'
 *
 * Take the two properties apart in the parameter list itself, rather than
 * writing instructor.name and instructor.deptName in the body.
 */
export function nameAndDept({ name, deptName }: Instructor): string {   // destructuring in the parameter list
    return `${name} of ${deptName}`;
}

// --- 3d. Spread -----------------------------------------------------------

/**
 * A copy of the department, in another building. The department you were
 * given must not change: build a new object with the three dots.
 */
export function withBuilding(department: Department, building: string): Department {
  const newDepartment={...department, building: building};    // the three dots copy all properties, then we override the building
  return newDepartment;   // return the new object, not the old one
}

// --- 3e. A tuple ----------------------------------------------------------

/**
 * The smallest and the largest budget of all departments, in that order.
 * The return type says there are exactly two numbers.
 */
export function budgetRange(): [number, number] {
  const budgets = departments.map(dept => dept.budget);
  return [Math.min(...budgets), Math.max(...budgets)];
}