// ===============================================
// Task 2: Variables & Data Types
// ===============================================

console.log("========== TASK 2: VARIABLES & DATA TYPES ==========");

// ---------- 1. let (value can be changed) ----------
let city = "Hyderabad";
console.log("City:", city);
city = "Visakhapatnam";           // re-assigning a let variable
console.log("Updated City:", city);

// ---------- 2. const (value cannot be changed) ----------
const PI = 3.14159;
console.log("Value of PI:", PI);
// PI = 3.14;  // This would cause an error: Assignment to constant variable

// ---------- 3. Variable declaration and assignment ----------
let age;                          // declaration only
age = 20;                         // assignment
console.log("Age:", age);

let collegeName = "ABC College";  // declaration + assignment together
console.log("College:", collegeName);

// ---------- 4. Data types ----------
let userName = "Harshita";        // String
let marks = 92.5;                 // Number
let isPassed = true;              // Boolean
let address;                      // undefined (declared but no value)
let phoneNumber = null;           // null (intentionally empty)

console.log("String:", userName);
console.log("Number:", marks);
console.log("Boolean:", isPassed);
console.log("Undefined:", address);
console.log("Null:", phoneNumber);

// ---------- 5. Checking data types using typeof ----------
console.log("typeof userName:", typeof userName);       // string
console.log("typeof marks:", typeof marks);             // number
console.log("typeof isPassed:", typeof isPassed);       // boolean
console.log("typeof address:", typeof address);         // undefined
console.log("typeof phoneNumber:", typeof phoneNumber); // object (a known quirk of JavaScript)
