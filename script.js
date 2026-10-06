const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const errorMessage = document.querySelector("#error-message");
const noteCount = document.querySelector("#note-count");

let notes = [];

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = "You have " + notes.length + " notes.";
  }
}

function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });
  render();
}

function render() {
  notesList.textContent = "";

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
    deleteBtn.addEventListener("click", function () {
      deleteNote(note.id);
    });

    li.appendChild(text);
    li.appendChild(meta);
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });

  updateCount();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }

  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";

  const note = {
    id: Date.now(),
    text: text,
    category: categorySelect.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  render();

  noteInput.value = "";
  noteInput.focus();
});

render();