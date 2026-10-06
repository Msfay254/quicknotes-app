// 1. Select the elements we need from the page
const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

// 2. The array that holds all our notes
let notes = [];

// 3. Draw every note on the page
function render() {
  notesList.textContent = ""; // empty the list first

  notes.forEach(function (note) {
    const li = document.createElement("li");
    li.className = "note category-" + note.category;

    const text = document.createElement("p");
    text.className = "note-text";
    text.textContent = note.text;

    const meta = document.createElement("p");
    meta.className = "note-meta";

    const label = document.createElement("span");
    label.className = "note-category";
    label.textContent = note.category;

    meta.appendChild(label);
    meta.append(" · " + note.createdAt);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";

    li.appendChild(text);
    li.appendChild(meta);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

// 4. When the form is submitted, add a note
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const note = {
    id: Date.now(),
    text: noteInput.value,
    category: categorySelect.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  render();

  noteInput.value = ""; // clear the input
  noteInput.focus();
});

// 5. Draw once when the page loads
render();