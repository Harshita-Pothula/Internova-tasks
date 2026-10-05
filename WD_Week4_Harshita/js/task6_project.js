// ===============================================
// Task 6: Mini Project - Student Record Manager
// Uses: functions, arrays, objects, DOM manipulation and events
// ===============================================

// ---------- Data: an ARRAY of student OBJECTS ----------
let students = [
  { roll: "21CS001", name: "Harshita Pothula", marks: { maths: 92, science: 88, english: 95 } },
  { roll: "21CS002", name: "Rahul Sharma", marks: { maths: 76, science: 81, english: 70 } },
  { roll: "21CS003", name: "Ananya Reddy", marks: { maths: 85, science: 90, english: 87 } },
  { roll: "21CS004", name: "Kiran Kumar", marks: { maths: 35, science: 42, english: 30 } },
  { roll: "21CS005", name: "Sneha Patel", marks: { maths: 68, science: 72, english: 79 } },
];

let editingRoll = null;   // roll number of the student being edited, or null when adding


// ---------- Selecting DOM elements ----------
const form = document.getElementById("student-form");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const mathsInput = document.getElementById("maths");
const scienceInput = document.getElementById("science");
const englishInput = document.getElementById("english");
const formError = document.getElementById("form-error");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const message = document.getElementById("message");

const searchInput = document.getElementById("search");
const gradeFilter = document.getElementById("grade-filter");
const sortSelect = document.getElementById("sort");
const rows = document.getElementById("student-rows");
const resultCount = document.getElementById("result-count");
const emptyMessage = document.getElementById("empty-message");


// ---------- Calculation functions ----------
function getTotal(student) {
  return student.marks.maths + student.marks.science + student.marks.english;
}

const getPercentage = (student) => (getTotal(student) / 300) * 100;

function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 40) return "D";
  return "F";
}

const hasPassed = (student) => getPercentage(student) >= 40;


// ---------- Validation ----------
function isValidMark(value) {
  const mark = Number(value);
  return value !== "" && Number.isInteger(mark) && mark >= 0 && mark <= 100;
}

// Returns an error message, or "" if everything is fine
function validateForm() {
  const name = nameInput.value.trim();
  const roll = rollInput.value.trim().toUpperCase();

  if (name.length < 2) return { message: "Enter the student's name (at least 2 letters).", field: nameInput };
  if (roll === "") return { message: "Enter a roll number.", field: rollInput };
  const rollTaken = students.some((s) => s.roll === roll && s.roll !== editingRoll);
  if (rollTaken) return { message: "Roll number " + roll + " already exists.", field: rollInput };

  const markFields = [mathsInput, scienceInput, englishInput];
  for (const field of markFields) {
    if (!isValidMark(field.value)) {
      const subject = field.previousElementSibling.textContent;
      return { message: subject + " marks must be a whole number from 0 to 100.", field: field };
    }
  }
  return null;
}


// ---------- Showing records (DOM manipulation) ----------
function getVisibleStudents() {
  const search = searchInput.value.trim().toLowerCase();
  const grade = gradeFilter.value;

  // filter by search text and grade
  let list = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search) || s.roll.toLowerCase().includes(search);
    const matchesGrade = grade === "all" || getGrade(getPercentage(s)) === grade;
    return matchesSearch && matchesGrade;
  });

  // sort a copy, so the original order stays the same
  list = [...list];
  if (sortSelect.value === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  if (sortSelect.value === "high") list.sort((a, b) => getPercentage(b) - getPercentage(a));
  if (sortSelect.value === "low") list.sort((a, b) => getPercentage(a) - getPercentage(b));
  if (sortSelect.value === "roll") list.sort((a, b) => a.roll.localeCompare(b.roll));
  return list;
}

function createCell(text, className) {
  const td = document.createElement("td");
  td.textContent = text;
  if (className) td.className = className;
  return td;
}

function renderTable(highlightRoll) {
  const list = getVisibleStudents();
  rows.innerHTML = "";   // clear old rows

  list.forEach((student) => {
    const percentage = getPercentage(student);
    const grade = getGrade(percentage);
    const tr = document.createElement("tr");
    if (student.roll === highlightRoll) tr.classList.add("just-changed");

    const rollCell = document.createElement("th");
    rollCell.scope = "row";
    rollCell.textContent = student.roll;
    tr.appendChild(rollCell);
    tr.appendChild(createCell(student.name));
    tr.appendChild(createCell(student.marks.maths, "num"));
    tr.appendChild(createCell(student.marks.science, "num"));
    tr.appendChild(createCell(student.marks.english, "num"));
    tr.appendChild(createCell(getTotal(student), "num"));
    tr.appendChild(createCell(percentage.toFixed(1), "num"));

    const gradeCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = grade === "F" ? "badge fail" : "badge";
    badge.textContent = grade;
    gradeCell.appendChild(badge);
    tr.appendChild(gradeCell);

    const actions = document.createElement("td");
    actions.className = "actions";
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "secondary";
    editBtn.textContent = "Edit";
    editBtn.dataset.action = "edit";
    editBtn.dataset.roll = student.roll;
    editBtn.setAttribute("aria-label", "Edit " + student.name);
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.action = "delete";
    deleteBtn.dataset.roll = student.roll;
    deleteBtn.setAttribute("aria-label", "Delete " + student.name);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    tr.appendChild(actions);

    rows.appendChild(tr);
  });

  resultCount.textContent = "Showing " + list.length + " of " + students.length + " students.";
  emptyMessage.classList.toggle("hidden", list.length > 0);
  renderStats();
}

function renderStats() {
  document.getElementById("stat-count").textContent = students.length;

  if (students.length === 0) {
    document.getElementById("stat-average").textContent = "0%";
    document.getElementById("stat-passed").textContent = "0";
    document.getElementById("stat-topper").textContent = "-";
    return;
  }
  const average = students.reduce((sum, s) => sum + getPercentage(s), 0) / students.length;
  const passed = students.filter(hasPassed).length;
  const topper = students.reduce((best, s) => (getPercentage(s) > getPercentage(best) ? s : best));

  document.getElementById("stat-average").textContent = average.toFixed(1) + "%";
  document.getElementById("stat-passed").textContent = passed + " / " + students.length;
  document.getElementById("stat-topper").textContent = topper.name.split(" ")[0] + " (" + getPercentage(topper).toFixed(1) + "%)";
}

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => {
    if (message.textContent === text) message.textContent = "";
  }, 3000);
}


// ---------- Add / edit mode ----------
function startEditing(roll) {
  const student = students.find((s) => s.roll === roll);
  editingRoll = roll;
  nameInput.value = student.name;
  rollInput.value = student.roll;
  mathsInput.value = student.marks.maths;
  scienceInput.value = student.marks.science;
  englishInput.value = student.marks.english;
  formTitle.textContent = "Edit " + student.name;
  submitBtn.textContent = "Save changes";
  cancelBtn.classList.remove("hidden");
  formError.textContent = "";
  nameInput.focus();
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function stopEditing() {
  editingRoll = null;
  form.reset();
  formTitle.textContent = "Add a student";
  submitBtn.textContent = "Add student";
  cancelBtn.classList.add("hidden");
  formError.textContent = "";
}


// ---------- Events ----------

// submit: add a new student or save an edit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const problem = validateForm();
  if (problem) {
    formError.textContent = problem.message;
    problem.field.focus();
    return;
  }

  const studentData = {
    roll: rollInput.value.trim().toUpperCase(),
    name: nameInput.value.trim(),
    marks: {
      maths: Number(mathsInput.value),
      science: Number(scienceInput.value),
      english: Number(englishInput.value),
    },
  };

  if (editingRoll) {
    // update the matching object in the array
    students = students.map((s) => (s.roll === editingRoll ? studentData : s));
    showMessage("Saved changes for " + studentData.name + ".");
  } else {
    students.push(studentData);
    showMessage("Added " + studentData.name + ".");
  }
  stopEditing();
  renderTable(studentData.roll);
  nameInput.focus();
});

cancelBtn.addEventListener("click", stopEditing);

// keyboard: Escape cancels editing
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && editingRoll) stopEditing();
});

// input: live search while typing
searchInput.addEventListener("input", () => renderTable());

// change: filter and sort dropdowns
gradeFilter.addEventListener("change", () => renderTable());
sortSelect.addEventListener("change", () => renderTable());

// click: one listener handles every Edit and Delete button (event delegation)
rows.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const roll = button.dataset.roll;
  const student = students.find((s) => s.roll === roll);

  if (button.dataset.action === "edit") {
    startEditing(roll);
  }
  if (button.dataset.action === "delete") {
    const sure = confirm("Delete " + student.name + " (" + roll + ")?");
    if (!sure) return;
    students = students.filter((s) => s.roll !== roll);   // remove from the array
    if (editingRoll === roll) stopEditing();
    renderTable();
    showMessage("Deleted " + student.name + ".");
    searchInput.focus();
  }
});


// ---------- Start ----------
renderTable();
