const fs = require("fs");
const path = require("path");

function validateNotes(notes) {
  if (!notes.title || typeof notes.title !== "string") {
    return false;
  }
  if (!notes.text || typeof notes.text !== "string") {
    return false;
  }
  return true;
}

function createNotes(body, notes) {
  const note = body;
  notes.push(note);
  console.log(notes);
  console.log(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }),
    null,
    2
  );
  console.log(note);
  return note;
}
module.exports = { validateNotes, createNotes };
