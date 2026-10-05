// ===============================================
// Task 4: Conditional Statements
// ===============================================

console.log("========== TASK 4: CONDITIONAL STATEMENTS ==========");

// ---------- 1. if: positive check ----------
let temperature = 35;
if (temperature > 30) {
  console.log("It's a hot day!");
}

// ---------- 2. if...else: even or odd ----------
let num = 17;
if (num % 2 === 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}

// ---------- 3. else if: positive, negative or zero ----------
let value = -8;
if (value > 0) {
  console.log(value + " is Positive");
} else if (value < 0) {
  console.log(value + " is Negative");
} else {
  console.log("The number is Zero");
}

// ---------- 4. Eligibility based on age ----------
let personAge = 19;
if (personAge >= 18) {
  console.log("Age " + personAge + ": Eligible to vote");
} else {
  console.log("Age " + personAge + ": Not eligible to vote");
}

// ---------- 5. Greater of two numbers ----------
let n1 = 45, n2 = 72;
if (n1 > n2) {
  console.log("Greater of " + n1 + " and " + n2 + " is " + n1);
} else {
  console.log("Greater of " + n1 + " and " + n2 + " is " + n2);
}

// ---------- 6. Greatest of three numbers (logical conditions) ----------
let p = 25, q = 90, r = 60;
if (p >= q && p >= r) {
  console.log("Greatest of three is " + p);
} else if (q >= p && q >= r) {
  console.log("Greatest of three is " + q);
} else {
  console.log("Greatest of three is " + r);
}

// ---------- 7. Grades based on marks ----------
let studentMarks = 84;
let grade;
if (studentMarks >= 90) {
  grade = "A+";
} else if (studentMarks >= 80) {
  grade = "A";
} else if (studentMarks >= 70) {
  grade = "B";
} else if (studentMarks >= 60) {
  grade = "C";
} else if (studentMarks >= 40) {
  grade = "D";
} else {
  grade = "F (Fail)";
}
console.log("Marks: " + studentMarks + " -> Grade: " + grade);

// ---------- 8. Nested if: driving licence eligibility ----------
let applicantAge = 22;
let passedTest = true;
if (applicantAge >= 18) {
  if (passedTest) {
    console.log("Driving licence approved");
  } else {
    console.log("Age is fine, but you must pass the driving test");
  }
} else {
  console.log("Too young to apply for a licence");
}

// ---------- 9. Logical conditions: weekend + weather ----------
let isWeekend = true;
let isRaining = false;
if (isWeekend && !isRaining) {
  console.log("Perfect day for an outing!");
} else if (isWeekend || isRaining) {
  console.log("Better to stay indoors");
}
