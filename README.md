# QuickNotes

QuickNotes is a simple note-taking web app built with HTML, CSS and vanilla JavaScript. You can write short notes, sort them into categories, search through them and delete the ones you no longer need. Your notes are saved in the browser, so they are still there after you refresh the page.

## Features

- Add notes with a category (Personal, Work or Study)
- Each note shows its text, category, and the date and time it was created
- Delete any note with its own Delete button
- Validation: empty notes and notes over 200 characters show an error message
- Live search that is not case-sensitive, with a "No notes match your search." message
- Note count that reads correctly for zero, one and many notes
- Notes saved to localStorage so they survive a page refresh
- Colour-coded note cards for each category
- Responsive layout: the form stacks vertically on screens 600px wide or narrower
- "Clear all" button with a confirmation prompt before deleting every note

## How to run locally

1. Clone the repository:
```bash
   git clone https://github.com/Msfay254/quicknotes-app.git
```
2. Open the folder:
```bash
   cd quicknotes-app
```
3. Open `index.html` in your web browser (double-click it, or right-click and choose "Open with" your browser).

No installation or build step is needed.

## What I learned

- How to build a page with semantic HTML tags and link a `<label>` to an `<input>` using `for` and `id`.
- How to use Flexbox and a media query to make a layout work on both large and small screens.
- How to build page content safely with `createElement` and `textContent` instead of `innerHTML`.
- How to store data as an array of objects and save it with `localStorage`, `JSON.stringify` and `JSON.parse`.
- How to use Git to save my work in small commits and push it to GitHub.