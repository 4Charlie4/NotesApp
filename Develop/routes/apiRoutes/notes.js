const router = require("express").Router();
const { validateNotes, createNotes } = require("../../lib/notes");
const { notes } = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");

//will deal with returning saved notes to user
router.get("/notes", (req, res) => {
  let result = notes;

  res.json(result);
});

//will deal with saving written notes and returning note to client(research npm packages to create unique ids)
router.post("/notes", (req, res) => {
  //gives random ID using package
  req.body.id = uuidv4();
  //validates that there is text written in the notetaker
  if (!validateNotes(req.body)) {
    res.status(400).send("Your notes must have some text");
  } else {
    //creates JSON format and posts to json file
    const note = createNotes(req.body, notes);

    res.json(note);
  }
});
//similar to above may need this over it
// router.post("/notes:id", (req, res) => {});

module.exports = router;
