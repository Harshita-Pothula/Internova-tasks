// ===============================================
// Task 3: Operators
// ===============================================

console.log("========== TASK 3: OPERATORS ==========");

let a = 15;
let b = 4;

// ---------- 1. Arithmetic operators ----------
console.log("--- Arithmetic Operators ---");
console.log("a + b =", a + b);   // Addition
console.log("a - b =", a - b);   // Subtraction
console.log("a * b =", a * b);   // Multiplication
console.log("a / b =", a / b);   // Division
console.log("a % b =", a % b);   // Modulus (remainder)
console.log("a ** 2 =", a ** 2); // Exponent

// ---------- 2. Assignment operators ----------
console.log("--- Assignment Operators ---");
let x = 10;
console.log("x = 10 ->", x);
x += 5;  console.log("x += 5 ->", x);
x -= 3;  console.log("x -= 3 ->", x);
x *= 2;  console.log("x *= 2 ->", x);
x /= 4;  console.log("x /= 4 ->", x);
x %= 4;  console.log("x %= 4 ->", x);

// ---------- 3. Comparison operators ----------
console.log("--- Comparison Operators ---");
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= 15:", a >= 15);
console.log("b <= 3:", b <= 3);
console.log("5 == '5':", 5 == "5");   // true (compares value only)
console.log("5 === '5':", 5 === "5"); // false (compares value and type)
console.log("a != b:", a != b);
console.log("5 !== '5':", 5 !== "5");

// ---------- 4. Logical operators ----------
console.log("--- Logical Operators ---");
let hasId = true;
let hasTicket = false;
console.log("hasId && hasTicket:", hasId && hasTicket); // AND
console.log("hasId || hasTicket:", hasId || hasTicket); // OR
console.log("!hasTicket:", !hasTicket);                 // NOT

// ---------- 5. Increment operator ----------
console.log("--- Increment Operator ---");
let count = 5;
console.log("Post-increment count++:", count++); // prints 5, then becomes 6
console.log("After post-increment:", count);
console.log("Pre-increment ++count:", ++count);  // becomes 7, then prints 7

// ---------- 6. Decrement operator ----------
console.log("--- Decrement Operator ---");
let stock = 10;
console.log("Post-decrement stock--:", stock--); // prints 10, then becomes 9
console.log("After post-decrement:", stock);
console.log("Pre-decrement --stock:", --stock);  // becomes 8, then prints 8
