// ===============================================
// Task 2: Arrays
// Dataset: courses offered in an internship programme
// ===============================================

// ---------- 1. Creating arrays ----------
section("1. Creating arrays");
let courses = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const marks = [78, 91, 85, 66, 94];
const emptyList = [];
show("courses:", courses);
show("marks:", marks);
show("emptyList length:", emptyList.length);


// ---------- 2. Accessing elements ----------
section("2. Accessing elements");
show("First course (index 0):", courses[0]);
show("Third course (index 2):", courses[2]);
show("Last course:", courses[courses.length - 1]);
show("Number of courses:", courses.length);


// ---------- 3. Adding elements ----------
section("3. Adding elements");
courses.push("MongoDB");             // add to the END
show("After push('MongoDB'):", courses);
courses.unshift("Git Basics");       // add to the START
show("After unshift('Git Basics'):", courses);
courses.splice(3, 0, "Bootstrap");   // insert at index 3
show("After splice(3, 0, 'Bootstrap'):", courses);


// ---------- 4. Removing elements ----------
section("4. Removing elements");
const lastRemoved = courses.pop();       // remove from the END
show("pop() removed:", lastRemoved);
const firstRemoved = courses.shift();    // remove from the START
show("shift() removed:", firstRemoved);
const middleRemoved = courses.splice(2, 1);  // remove 1 item at index 2
show("splice(2, 1) removed:", middleRemoved);
show("Courses now:", courses);


// ---------- 5. Updating elements ----------
section("5. Updating elements");
courses[3] = "React.js";                 // replace by index
show("After courses[3] = 'React.js':", courses);
const cssIndex = courses.indexOf("CSS");
courses[cssIndex] = "CSS3";
show("Found 'CSS' at index " + cssIndex + ", updated to 'CSS3':", courses);


// ---------- 6. Iterating through arrays ----------
section("6. Iterating");
// for loop
for (let i = 0; i < courses.length; i++) {
  show("for loop, course " + (i + 1) + ":", courses[i]);
}
// for...of loop
let totalMarks = 0;
for (const mark of marks) {
  totalMarks += mark;
}
show("for...of, total of all marks:", totalMarks);
// forEach
courses.forEach((course, index) => {
  show("forEach index " + index + ":", course.toUpperCase());
});


// ---------- 7. Basic array methods ----------
section("7. Array methods");
show("includes('JavaScript'):", courses.includes("JavaScript"));
show("indexOf('React.js'):", courses.indexOf("React.js"));
show("join(' | '):", courses.join(" | "));
show("slice(1, 3) (copy of part):", courses.slice(1, 3));
show("map: marks + 5 bonus:", marks.map((m) => m + 5));
show("filter: marks above 80:", marks.filter((m) => m > 80));
show("find: first mark below 70:", marks.find((m) => m < 70));
show("reduce: average mark:", (marks.reduce((sum, m) => sum + m, 0) / marks.length).toFixed(1));
show("sort (A to Z), on a copy:", [...courses].sort());
show("sort marks high to low, on a copy:", [...marks].sort((a, b) => b - a));
show("reverse, on a copy:", [...courses].reverse());
show("concat with ['Python']:", courses.concat(["Python"]));
