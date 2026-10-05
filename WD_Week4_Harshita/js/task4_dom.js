// ===============================================
// Task 4: DOM Manipulation
// ===============================================

// ---------- 1. Selecting elements (4 ways) ----------
const pageTitle = document.getElementById("page-title");          // by id
const firstCard = document.querySelector(".info-card");             // first match of a CSS selector
const allCards = document.querySelectorAll(".info-card");           // all matches (NodeList)
const allButtons = document.getElementsByTagName("button");         // by tag name

const report = document.getElementById("selection-report");
const findings = [
  "getElementById('page-title') found the heading: \"" + pageTitle.textContent + "\"",
  "querySelector('.info-card') found the first card: \"" + firstCard.querySelector("h2").textContent + "\"",
  "querySelectorAll('.info-card') found " + allCards.length + " cards",
  "getElementsByTagName('button') found " + allButtons.length + " buttons",
];
findings.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  report.appendChild(li);
});

// Small helper that records what changed, shown in section 7
const lastChange = document.getElementById("last-change");
function logChange(message) {
  lastChange.textContent = message;
}


// ---------- 2. Changing text content ----------
const welcomeText = document.getElementById("welcome-text");
const greetings = ["Hello, visitor!", "Welcome to Week 4!", "JavaScript changed this text.", "Keep practising!"];
let greetingIndex = 0;

document.getElementById("change-text-btn").addEventListener("click", () => {
  greetingIndex = (greetingIndex + 1) % greetings.length;   // cycle through the array
  welcomeText.textContent = greetings[greetingIndex];
  logChange("Text changed with textContent");
});


// ---------- 3. Changing HTML content ----------
const courseDetails = document.getElementById("course-details");
const showDetailsBtn = document.getElementById("show-details-btn");
let detailsShown = false;

showDetailsBtn.addEventListener("click", () => {
  detailsShown = !detailsShown;
  if (detailsShown) {
    // innerHTML replaces the content with new HTML elements
    courseDetails.innerHTML =
      "<p><strong>Course:</strong> Web Development</p>" +
      "<p><strong>Duration:</strong> 8 weeks</p>" +
      "<p><strong>Mode:</strong> <em>Online</em></p>";
    showDetailsBtn.textContent = "Hide course details";
  } else {
    courseDetails.innerHTML = "<p>Course details are hidden.</p>";
    showDetailsBtn.textContent = "Show course details";
  }
  logChange("HTML changed with innerHTML");
});


// ---------- 4. Changing CSS styles ----------
const styleBox = document.getElementById("style-box");

document.getElementById("change-style-btn").addEventListener("click", () => {
  styleBox.style.backgroundColor = "#0b5394";   // style property
  styleBox.style.color = "#ffffff";
  styleBox.style.borderRadius = "24px";
  styleBox.style.transform = "scale(1.03)";
  styleBox.style.transition = "all 0.3s";
  logChange("Styles changed with element.style");
});

document.getElementById("reset-style-btn").addEventListener("click", () => {
  styleBox.removeAttribute("style");            // back to the CSS file's styles
  logChange("Styles reset");
});


// ---------- 5. Adding elements ----------
const skillInput = document.getElementById("skill-input");
const skillList = document.getElementById("skill-list");
const skillError = document.getElementById("skill-error");
const skillCount = document.getElementById("skill-count");

function updateSkillCount() {
  skillCount.textContent = skillList.children.length;
}

document.getElementById("add-skill-btn").addEventListener("click", () => {
  const skill = skillInput.value.trim();
  if (skill === "") {
    skillError.textContent = "Type a skill first.";
    skillInput.focus();
    return;
  }
  skillError.textContent = "";

  const newItem = document.createElement("li");   // create
  newItem.textContent = skill;                     // fill
  newItem.classList.add("highlight");              // style with a CSS class
  skillList.appendChild(newItem);                  // add to the page

  skillInput.value = "";
  skillInput.focus();
  updateSkillCount();
  logChange("Added \"" + skill + "\" with createElement + appendChild");
});


// ---------- 6. Removing elements ----------
document.getElementById("remove-last-btn").addEventListener("click", () => {
  const lastItem = skillList.lastElementChild;
  if (!lastItem) {
    skillError.textContent = "The list is already empty.";
    return;
  }
  skillError.textContent = "";
  const removedName = lastItem.textContent;
  lastItem.remove();                               // remove from the page
  updateSkillCount();
  logChange("Removed \"" + removedName + "\" with remove()");
});


// ---------- 7. Updating content dynamically ----------
// A live clock that updates every second
const clock = document.getElementById("clock");
function updateClock() {
  clock.textContent = new Date().toLocaleTimeString("en-IN");
}
updateClock();
setInterval(updateClock, 1000);

// Change the page title text when the page loads, to show JS is running
pageTitle.textContent = "Task 4: DOM Manipulation (JavaScript loaded)";
