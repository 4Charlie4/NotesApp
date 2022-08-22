const fs = require("fs");
const path = require("path");

function validateNotes(notes) {
  if (!notes.title || typeof notes.title !== "string") {
    return false;
  }
  if (!notes.text || typeof notes.text !== "string") {
    return false;
  }
}

module.exports = { validateNotes };
