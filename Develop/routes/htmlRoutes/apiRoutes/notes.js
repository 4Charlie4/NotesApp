const { validateNotes } = require("../../../lib/notes");
const router = require("express").Router();
const { notes } = require("../../../db/db.json");

//will deal with returning saved notes to user
router.get("/notes", (req, res) => {
  let results = notes;
  if (req) {
    results = req;
  }
  res.json(results);
});
//will deal with saving written notes and returning note to client(research npm packages to create unique ids)
router.post("/notes", (req, res) => {});
//similar to above may need this over it
router.post("/notes:id", (req, res) => {});
