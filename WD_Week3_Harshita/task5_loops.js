// ===============================================
// Task 5: Loops
// ===============================================

console.log("========== TASK 5: LOOPS ==========");

// ---------- 1. for loop: numbers 1 to 10 ----------
console.log("--- Numbers from 1 to 10 (for loop) ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ---------- 2. Even numbers (loop with condition) ----------
console.log("--- Even numbers from 1 to 20 ---");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ---------- 3. Odd numbers ----------
console.log("--- Odd numbers from 1 to 20 ---");
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// ---------- 4. Multiplication table (while loop) ----------
console.log("--- Multiplication table of 7 (while loop) ---");
let tableNum = 7;
let j = 1;
while (j <= 10) {
  console.log(tableNum + " x " + j + " = " + tableNum * j);
  j++;
}

// ---------- 5. Sum of numbers (do...while loop) ----------
console.log("--- Sum of numbers from 1 to 100 (do...while loop) ---");
let k = 1;
let sum = 0;
do {
  sum += k;
  k++;
} while (k <= 100);
console.log("Sum = " + sum);

// ---------- 6. Reverse order (decrement in loop) ----------
console.log("--- Numbers from 10 to 1 (reverse) ---");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ---------- 7. do...while runs at least once ----------
console.log("--- do...while runs at least once ---");
let attempt = 5;
do {
  console.log("This prints even though attempt (" + attempt + ") > 3");
  attempt++;
} while (attempt <= 3);
