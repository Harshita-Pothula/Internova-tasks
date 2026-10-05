// ===============================================
// Task 5: Events
// ===============================================

// ---------- click ----------
let likes = 0;
const likeCount = document.getElementById("like-count");

document.getElementById("like-btn").addEventListener("click", () => {
  likes++;
  likeCount.textContent = likes;
});
document.getElementById("reset-likes-btn").addEventListener("click", () => {
  likes = 0;
  likeCount.textContent = likes;
});


// ---------- input (fires on every keystroke) ----------
const bio = document.getElementById("bio");
const charCount = document.getElementById("char-count");
const bioPreview = document.getElementById("bio-preview");

bio.addEventListener("input", () => {
  charCount.textContent = bio.value.length;
  bioPreview.textContent = bio.value.trim() === "" ? "(empty)" : bio.value;
});


// ---------- change (fires when a choice is made) ----------
const courseSelect = document.getElementById("course-select");
const courseMessage = document.getElementById("course-message");

courseSelect.addEventListener("change", (event) => {
  const choice = event.target.value;
  courseMessage.textContent = choice ? "Great choice! You picked " + choice + "." : "No topic chosen yet.";
});

document.getElementById("theme-check").addEventListener("change", (event) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.backgroundColor = event.target.checked ? "#23272b" : "";
    card.style.color = event.target.checked ? "#f1f3f4" : "";
  });
});


// ---------- submit ----------
const form = document.getElementById("feedback-form");
const formError = document.getElementById("form-error");
const formResult = document.getElementById("form-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();               // stop the page from reloading
  const name = document.getElementById("fb-name").value.trim();
  const rating = Number(document.getElementById("fb-rating").value);

  if (name === "") {
    formError.textContent = "Please enter your name.";
    document.getElementById("fb-name").focus();
    return;
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    formError.textContent = "Please enter a rating from 1 to 5.";
    document.getElementById("fb-rating").focus();
    return;
  }
  formError.textContent = "";
  formResult.textContent = "Thanks, " + name + "! You rated this course " + "★".repeat(rating) + " (" + rating + "/5).";
  form.reset();
});


// ---------- mouse events ----------
const hoverCard = document.getElementById("hover-card");
const hoverText = document.getElementById("hover-text");
const hoverCount = document.getElementById("hover-count");
const mousePos = document.getElementById("mouse-pos");
let enterCount = 0;

hoverCard.addEventListener("mouseenter", () => {
  enterCount++;
  hoverCount.textContent = enterCount;
  hoverCard.classList.add("highlight");
  hoverText.textContent = "The mouse is over this card!";
});
hoverCard.addEventListener("mouseleave", () => {
  hoverCard.classList.remove("highlight");
  hoverText.textContent = "Move your mouse over this card.";
  mousePos.textContent = "-";
});
hoverCard.addEventListener("mousemove", (event) => {
  const box = hoverCard.getBoundingClientRect();
  const x = Math.round(event.clientX - box.left);
  const y = Math.round(event.clientY - box.top);
  mousePos.textContent = "x: " + x + ", y: " + y;
});
hoverCard.addEventListener("dblclick", () => {
  enterCount = 0;
  hoverCount.textContent = enterCount;
});


// ---------- keyboard events ----------
const lastKey = document.getElementById("last-key");
const quickNote = document.getElementById("quick-note");
const noteList = document.getElementById("note-list");

// keydown on the whole page
document.addEventListener("keydown", (event) => {
  lastKey.textContent = event.key === " " ? "Space" : event.key;
});

// Enter key inside the input saves a note
quickNote.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && quickNote.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = quickNote.value.trim();
    noteList.appendChild(li);
    quickNote.value = "";
  }
});
