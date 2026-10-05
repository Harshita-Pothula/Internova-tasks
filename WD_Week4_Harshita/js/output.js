// Helper used by Tasks 1-3: prints each result in the console AND on the page,
// so the output can be checked without opening the developer tools.

const outputList = document.getElementById("output");

// Start a new titled section
function section(title) {
  console.log("\n===== " + title + " =====");
  const item = document.createElement("li");
  item.className = "section";
  item.textContent = title;
  outputList.appendChild(item);
}

// Print one labelled result
function show(label, value) {
  console.log(label, value);
  const item = document.createElement("li");
  const labelSpan = document.createElement("span");
  labelSpan.className = "label";
  labelSpan.textContent = label + " ";
  item.appendChild(labelSpan);
  // Arrays and objects are shown as JSON so they are readable
  const text = typeof value === "object" && value !== null ? JSON.stringify(value) : String(value);
  item.appendChild(document.createTextNode(text));
  outputList.appendChild(item);
}
