// ===============================================
// Task 3: Objects
// Scenario: an internship programme with a student, a mentor and a course
// ===============================================

// ---------- 1. Creating objects (3 objects) ----------
section("1. Creating objects");

const student = {
  name: "Harshita Pothula",
  rollNumber: "WD2026-014",
  course: "Web Development",
  week: 4,
  isActive: true,
  skills: ["HTML", "CSS", "JavaScript"],
};

const mentor = {
  name: "Rahul Sharma",
  expertise: "Front-end development",
  experienceYears: 6,
  email: "rahul.mentor@example.com",
};

const course = {
  title: "Web Development Internship",
  durationWeeks: 8,
  fee: 4999,
  mode: "Online",
  // A method: a function stored inside an object
  summary: function () {
    return this.title + " (" + this.durationWeeks + " weeks, " + this.mode + ")";
  },
};

show("student:", student);
show("mentor:", mentor);
show("course:", { title: course.title, durationWeeks: course.durationWeeks, fee: course.fee, mode: course.mode });


// ---------- 2. Properties and values ----------
section("2. Properties and values");
show("Property names of student:", Object.keys(student));
show("Values of mentor:", Object.values(mentor));
// Loop through every property and its value
for (const key in mentor) {
  show("mentor." + key + " =", mentor[key]);
}


// ---------- 3. Accessing properties ----------
section("3. Accessing properties");
show("Dot notation, student.name:", student.name);
show("Bracket notation, student['rollNumber']:", student["rollNumber"]);
const field = "expertise";
show("Bracket with a variable, mentor[field]:", mentor[field]);
show("Array inside object, student.skills[2]:", student.skills[2]);
show("Calling a method, course.summary():", course.summary());


// ---------- 4. Updating properties ----------
section("4. Updating properties");
student.week = 5;
course.fee = 3999;
mentor["experienceYears"] = 7;
student.skills.push("DOM");
show("student.week updated to:", student.week);
show("course.fee updated to:", course.fee);
show("mentor.experienceYears updated to:", mentor.experienceYears);
show("student.skills after push:", student.skills);


// ---------- 5. Adding new properties ----------
section("5. Adding new properties");
student.city = "Hyderabad";
student["attendance"] = "96%";
mentor.availability = "Saturdays, 10 am to 12 pm";
course.certificate = true;
show("student.city:", student.city);
show("student.attendance:", student.attendance);
show("mentor.availability:", mentor.availability);
show("'certificate' in course:", "certificate" in course);


// ---------- 6. Removing properties ----------
section("6. Removing properties");
delete mentor.email;
delete student.isActive;
show("After delete mentor.email:", mentor);
show("Does student still have 'isActive'?", student.hasOwnProperty("isActive"));


// ---------- 7. Array of objects (practical use) ----------
section("7. Array of objects");
const interns = [
  { name: "Harshita", score: 92 },
  { name: "Kiran", score: 78 },
  { name: "Ananya", score: 88 },
];
const topper = interns.reduce((best, s) => (s.score > best.score ? s : best));
show("Topper:", topper.name + " with " + topper.score);
show("Names of interns scoring 80+:", interns.filter((s) => s.score >= 80).map((s) => s.name));
