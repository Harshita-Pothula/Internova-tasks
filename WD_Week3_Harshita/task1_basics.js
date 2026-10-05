// ===============================================
// Task 1: JavaScript Basics
// ===============================================

console.log("========== TASK 1: JAVASCRIPT BASICS ==========");

// ---------- 1. console.log() ----------
// console.log() prints output to the browser console
console.log("Hello, World!");
console.log("Welcome to JavaScript Fundamentals");

// ---------- 2. Single-line comments ----------
// This is a single-line comment. JavaScript ignores it.
console.log("Single-line comments start with //");

// ---------- 3. Multi-line comments ----------
/*
  This is a multi-line comment.
  It can span several lines.
  Useful for longer explanations.
*/
console.log("Multi-line comments are written between /* and */");

// ---------- 4. JavaScript syntax ----------
// Statements end with a semicolon, and JavaScript is case-sensitive
let message = "JavaScript is case-sensitive";
let Message = "This is a different variable";
console.log(message);
console.log(Message);

// ---------- 5. Basic JavaScript statements ----------
let studentName = "Harshita";      // declaration + assignment statement
let course = "Web Development";
console.log("Student Name: " + studentName);
console.log("Course: " + course);
console.log("2 + 3 =", 2 + 3);     // expression statement

// ---------- 6. Linking JavaScript with HTML ----------
// This file is linked in index.html using:
// <script src="task1_basics.js"></script>
console.log("This file is linked to index.html using the <script> tag");
