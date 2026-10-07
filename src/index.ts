// The entry point. Build and run it with:  npm run build   then   npm start
//
// Uncomment each block as you finish the matching exercise, and compare what
// you get with the expected result in the comment.
//
// The imports end in .js although the files are .ts: you are importing what
// the compiler will produce, not what you wrote. Modules come in lesson 4.2;
// until then, take these lines as they are.

import { departments, instructors } from './data.js';
import {
  salaryBand, describeInstructor, instructorsIn, totalBudget,
  findInstructor, departmentOf, getDepartment,
} from './basics.js';
import { bandOf, isSenior, officeLabel, scopeDemo } from './functions.js';
import { rankOf, describeBudget, nameAndDept, withBuilding, budgetRange } from './types.js';

console.log('The toolchain works.');
console.log(departments.length + ' departments, ' + instructors.length + ' instructors.');

// --- Task 1b ---
console.log(salaryBand(40000));                      // low
console.log(salaryBand(65000));                      // mid
console.log(salaryBand(95000));                      // high
console.log(describeInstructor(instructors[0]));     // 10101  Srinivasan (Comp. Sci.), 65000 kr

// --- Task 1c ---
console.log(instructorsIn('Comp. Sci.'));            // [ 'Srinivasan', 'Katz', 'Brandt' ]
console.log(instructorsIn('Nursing'));               // []
console.log(totalBudget());                          // 595000

// --- Task 1d ---
console.log(findInstructor('22222'));                // the Einstein object
console.log(findInstructor('99999'));                // undefined
console.log(departmentOf('15151'));                  // the Music department
console.log(departmentOf('99999'));                  // undefined

// --- Task 1e ---
// console.log(getDepartment('Music'));                 // the Music department
// try {
//   getDepartment('Nursing');
// } catch (err) {
//   console.log('caught:', (err as Error).message);
// }

// --- Task 2 ---
// console.log(bandOf(87000));                          // mid
// console.log(isSenior(instructors[3]));               // true  (Einstein, 95000)
// console.log(isSenior(instructors[2]));               // false (Mozart, 40000)
// console.log(officeLabel(instructors[6], 'Taylor'));  // Katz, Taylor
// console.log(officeLabel(instructors[6]));            // Katz, building unknown
// scopeDemo();                                         // predict this one first

// --- Task 3 ---
// console.log(rankOf(65000));                          // assistant
// console.log(rankOf(87000));                          // associate
// console.log(rankOf(95000));                          // professor
// console.log(describeBudget(null));                   // budget not set
// console.log(describeBudget(50000));                  // budget 50000 kr
// console.log(nameAndDept(instructors[0]));            // Srinivasan of Comp. Sci.
// console.log(withBuilding(departments[4], 'Watson')); // History, now in Watson
// console.log(departments[4]);                         // still Painter: unchanged
// console.log(budgetRange());                          // [ 50000, 120000 ]
