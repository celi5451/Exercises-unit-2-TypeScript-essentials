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
 * When it works, try returning 'lecturer' and read the error.
 */
export function rankOf(salary: number): Rank {
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
  // TODO
  throw new Error('not implemented');
}

// --- 3c. Destructuring ----------------------------------------------------

/**
 * 'Srinivasan of Comp. Sci.'
 *
 * Take the two properties apart in the parameter list itself, rather than
 * writing instructor.name and instructor.deptName in the body.
 */
export function nameAndDept({ name, deptName }: Instructor): string {
  // TODO
  throw new Error('not implemented');
}

// --- 3d. Spread -----------------------------------------------------------

/**
 * A copy of the department, in another building. The department you were
 * given must not change: build a new object with the three dots.
 */
export function withBuilding(department: Department, building: string): Department {
  // TODO
  throw new Error('not implemented');
}

// --- 3e. A tuple ----------------------------------------------------------

/**
 * The smallest and the largest budget of all departments, in that order.
 * The return type says there are exactly two numbers.
 */
export function budgetRange(): [number, number] {
  // TODO
  throw new Error('not implemented');
}
