const router = require('express').Router();
let db = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(db);
});


router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = newNote(req.body, notes);
    db.push(newNote)
    res.json(note);
  }
});

module.exports = router;
