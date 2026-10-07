# Exercises: unit 2, TypeScript essentials

Complex IT Systems – Theory E2026 (40417)
Section 2 - backend development

Lessons 2.1 Introduction to TypeScript, 2.2 Scope and functions as values,
2.3 Beyond the basic types.

Everything you need is in this folder. Open it in VS Code (File > Open
Folder), open a terminal in it, and install the compiler once:

```
npm install
```

Then, after every change:

```
npm run build
npm start
```

`src/data.ts` holds seven departments and twelve instructors, copied from the
university database you will query for real in unit 6. Read it first.

Work in order. Fill in each `TODO` and **do not change the signatures**: the
parameter types and the return types are part of the exercise.

---

## Task 1 – The basics

`src/basics.ts`

### 1a. Variables, and your first commit

Declare a constant for a building name and a variable for a salary, then try
to assign a string to the number and read what the compiler says.

Now put your work under version control. In this folder:

```
git init
git status
git add .
git commit -m "Start the TypeScript exercises"
```

`git status` must not mention `node_modules` or `dist`: `.gitignore` keeps
them out. Then create an empty repository on GitHub and push:

```
git remote add origin <the URL GitHub shows you>
git branch -M main
git push -u origin main
```

The first push may ask you to log in. Get it working now, and ask for help if
it fights you: your group hands in the assignment as a link to a repository.

**From here on, commit after every task.** A commit per meaningful step.

### 1b. Functions, and the debugger

Write `salaryBand` and `describeInstructor`. Uncomment the Task 1b lines in
`src/index.ts`, build, and run.

Then stop the program and look inside it:

1. Put a breakpoint on the first line of `salaryBand` (click left of the line
   number).
2. Press **F5**.
3. The program stops. Read `salary` in the **Variables** panel.
4. **F10** runs one line. **F11** steps into a call. **F5** continues.

Do this now, on code you wrote yourself. From here on, when something is
wrong, put a breakpoint there instead of guessing.

### 1c. Loops

`instructorsIn(deptName)` with a `for ... of` loop, and `totalBudget()`.

### 1d. Objects and interfaces

`findInstructor(id)` returns `Instructor | undefined`. `departmentOf(id)`
needs both arrays, so one loop goes inside the other.

### 1e. Errors

`getDepartment(name)` **throws** when there is no such department. Then wrap
a call in `try` and `catch` in `index.ts` and print the message.

Finally, answer the three questions at the bottom of `basics.ts`. They are
about `undefined` versus throwing, and there is no single right answer: be
able to argue for one.

**Done when:** the Task 1 lines in `index.ts` print the expected results.

---

## Task 2 – Functions as values

`src/functions.ts`

- **2a** `bandOf`: the same rule as `salaryBand`, written as an arrow
  function assigned to a constant.
- **2b** `isSenior`: here the *variable* carries the function type
  `(instructor: Instructor) => boolean`, so the parameter needs no annotation
  of its own. Read that line carefully before you fill in the body.
- **2c** `officeLabel(instructor, building?)`: an optional parameter and the
  conditional expression `condition ? a : b`.
- **2d** `scopeDemo` is written for you. **Predict what it prints before you
  run it**, in a comment. Then run it. Then uncomment the last two lines,
  build, and read the error.

**Done when:** you can say why the two `building` constants do not clash.

---

## Task 3 – Beyond the basic types

`src/types.ts`

- **3a** `Rank` is a union of three literal strings; `rankOf(salary)` returns
  one of them. Try returning `'lecturer'` and read the error.
- **3b** `describeBudget(budget: number | null)`: the compiler will not let
  you use the number before you have ruled out `null`.
- **3c** `nameAndDept`: take the properties apart in the parameter list.
- **3d** `withBuilding`: return a new department with the three dots, leaving
  the original untouched. The last two lines of the Task 3 block in
  `index.ts` prove it.
- **3e** `budgetRange()` returns a tuple: exactly two numbers, in order.

**Done when:** all Task 3 lines print the expected results.

---

## If you finish early

- `instructorsIn` returns names. Write a version returning whole `Instructor`
  objects. What changes in the signature, and what changes for the caller?
- Write `type Staff = { id: string; name: string } & { salary: number }` and
  assign an instructor to it. Which properties are required?
- Mark `id` in the `Instructor` interface as `readonly` and try to assign to
  it.
- Turn `"sourceMap"` off in `tsconfig.json`, delete `dist`, rebuild, and set
  a breakpoint again. What are you debugging now? Turn it back on afterwards.

---

## Reference

- **[TS]** The TypeScript Handbook, typescriptlang.org/docs/handbook/intro.html
- **[JS]** JavaScript Guide, MDN Web Docs, developer.mozilla.org/en-US/docs/Web/JavaScript
- **[GIT]** Pro Git, git-scm.com/book/en/v2
