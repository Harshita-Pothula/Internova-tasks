// ===============================================
// Task 6: JavaScript Practice Programs
// ===============================================

console.log("========== TASK 6: PRACTICE PROGRAMS ==========");

// ---------- Program 1: Factorial of a number ----------
console.log("--- Program 1: Factorial ---");
const factNum = 6;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
  factorial *= i;
}
console.log("Factorial of " + factNum + " = " + factorial);

// ---------- Program 2: Check prime number ----------
console.log("--- Program 2: Prime Check ---");
let primeCandidate = 29;
let isPrime = primeCandidate > 1;
for (let i = 2; i * i <= primeCandidate; i++) {
  if (primeCandidate % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(primeCandidate + (isPrime ? " is a Prime number" : " is not a Prime number"));

// ---------- Program 3: Leap year check ----------
console.log("--- Program 3: Leap Year ---");
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}

// ---------- Program 4: Reverse a number and check palindrome ----------
console.log("--- Program 4: Palindrome Number ---");
let original = 12321;
let temp = original;
let reversed = 0;
while (temp > 0) {
  let digit = temp % 10;
  reversed = reversed * 10 + digit;
  temp = Math.floor(temp / 10);
}
console.log("Reversed: " + reversed);
console.log(original === reversed ? original + " is a Palindrome" : original + " is not a Palindrome");

// ---------- Program 5: Fibonacci series ----------
console.log("--- Program 5: Fibonacci Series (first 10 terms) ---");
let first = 0, second = 1;
let series = "";
for (let i = 1; i <= 10; i++) {
  series += first + " ";
  let next = first + second;
  first = second;
  second = next;
}
console.log(series);

// ---------- Program 6: Simple electricity bill calculator ----------
console.log("--- Program 6: Electricity Bill ---");
const units = 250;
let bill = 0;
if (units <= 100) {
  bill = units * 1.5;
} else if (units <= 200) {
  bill = 100 * 1.5 + (units - 100) * 2.5;
} else {
  bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4;
}
console.log("Units consumed: " + units + " -> Bill amount: Rs. " + bill);
