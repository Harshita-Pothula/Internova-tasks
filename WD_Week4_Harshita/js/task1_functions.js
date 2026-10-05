// ===============================================
// Task 1: JavaScript Functions
// ===============================================

// ---------- 1. Function declaration ----------
// A named function, declared with the "function" keyword
function greetStudent() {
  return "Welcome to the Web Development internship!";
}

section("1. Function declaration");
show("greetStudent() returns:", greetStudent());


// ---------- 2 & 3. Parameters and arguments ----------
// "name" and "course" are PARAMETERS (placeholders in the definition)
function generateGreeting(name, course) {
  return "Hello " + name + ", welcome to the " + course + " course!";
}

section("2 & 3. Parameters and arguments");
// "Harshita" and "Web Development" are ARGUMENTS (actual values passed in)
show("generateGreeting('Harshita', 'Web Development'):", generateGreeting("Harshita", "Web Development"));
show("generateGreeting('Rahul', 'Data Science'):", generateGreeting("Rahul", "Data Science"));

// Default parameter: used when no argument is given
function welcomeMessage(name = "Guest") {
  return "Good morning, " + name + "!";
}
show("welcomeMessage() with no argument:", welcomeMessage());


// ---------- 4. Return values ----------
// A function that calculates and RETURNS a value we can store and reuse
function calculateTotalPrice(price, quantity) {
  const total = price * quantity;
  return total;
}

section("4. Return values");
const notebookTotal = calculateTotalPrice(45, 4);
show("Total for 4 notebooks at Rs. 45:", "Rs. " + notebookTotal);

// Using one returned value inside another calculation
const totalWithPen = notebookTotal + calculateTotalPrice(20, 2);
show("Plus 2 pens at Rs. 20:", "Rs. " + totalWithPen);


// ---------- 5. Multiple functions working together ----------
// Each function does one job; the last one combines them

function calculateTotalMarks(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return total;
}

function calculatePercentage(total, subjects) {
  return (total / (subjects * 100)) * 100;
}

function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 40) return "D";
  return "F";
}

function getResult(studentName, marks) {
  const total = calculateTotalMarks(marks);
  const percentage = calculatePercentage(total, marks.length);
  const grade = getGrade(percentage);
  const status = percentage >= 40 ? "Pass" : "Fail";
  return studentName + ": total " + total + ", " + percentage.toFixed(1) + "%, grade " + grade + " (" + status + ")";
}

section("5. Multiple functions");
show("Result 1:", getResult("Harshita", [88, 92, 79, 95, 84]));
show("Result 2:", getResult("Kiran", [35, 42, 28, 50, 39]));


// ---------- 6. Arrow functions ----------
// Shorter syntax. With one expression, the result is returned automatically.

const square = (number) => number * number;
const addGST = (amount) => amount + amount * 0.18;      // 18% GST
const isEven = (number) => number % 2 === 0;
const fullName = (first, last) => `${first} ${last}`;    // template literal

// Arrow function with a body: needs "return"
const applyDiscount = (price, percent) => {
  const discount = (price * percent) / 100;
  return price - discount;
};

section("6. Arrow functions");
show("square(12):", square(12));
show("addGST(1000):", "Rs. " + addGST(1000));
show("isEven(7):", isEven(7));
show("fullName('Harshita', 'Pothula'):", fullName("Harshita", "Pothula"));
show("applyDiscount(2500, 10):", "Rs. " + applyDiscount(2500, 10));

// Arrow functions are often passed to other functions
const prices = [120, 450, 80, 999];
show("Prices with GST (using map + arrow):", prices.map((p) => addGST(p)));
