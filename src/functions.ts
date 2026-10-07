// Task 2 - functions as values (lesson 2.2)
//
// The same kind of work as in Task 1, but now functions are values: written
// as expressions, stored in variables, and given a type of their own.

import { Instructor } from './data.js';

// --- 2a. The same function, written as an expression ----------------------

/**
 * The salary band from Task 1, written as an arrow function assigned to a
 * constant. The behaviour is identical:
 *   below 60000 -> 'low', 60000 to 89999 -> 'mid', 90000 and above -> 'high'
 */
export const bandOf = (salary: number): string => {
  // TODO
  throw new Error('not implemented');
};

// --- 2b. A variable with a function type ----------------------------------

/**
 * True when the instructor earns 80000 or more.
 *
 * The annotation on the variable is the function type. Because the type is
 * already given, the parameter needs no annotation of its own.
 */
export const isSenior: (instructor: Instructor) => boolean = (instructor) => {
  // TODO
  throw new Error('not implemented');
};

// --- 2c. Optional parameters and the conditional expression ---------------

/**
 * A label for an office, for example:
 *
 *     officeLabel(katz, 'Taylor')   ->  'Katz, Taylor'
 *     officeLabel(katz)             ->  'Katz, building unknown'
 *
 * Use the conditional expression:  condition ? valueIfTrue : valueIfFalse
 */
export const officeLabel = (instructor: Instructor, building?: string): string => {
  // TODO
  throw new Error('not implemented');
};

// --- 2d. Scope ------------------------------------------------------------

/**
 * This one is written for you. Predict what it prints BEFORE you run it,
 * write your prediction in a comment, then run it and compare.
 */
export function scopeDemo(): void {
  const building = 'Taylor';
  {
    const building = 'Watson';
    console.log('inside the block:', building);
  }
  console.log('outside the block:', building);

  // Now uncomment these two lines, build, and read what the compiler says.
  // Then move the declaration above the console.log and build again.
  // console.log('capacity is', capacity);
  // const capacity = 30;
}
