const router = require('express').Router();
const fs = require('fs');
let db = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
  res.json(db);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    const note = req.body;
    db.push(note);
    res.json(db);
});

router.get('/notes/:id', (req,res) => {
  const result = findById(req.params.id);
  if(result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/notes/:id', (req, res) => {
  let noteId = req.params.id.toString(); 
  const noteData = db.filter(db => db.id !== noteId);
  db = noteData
  res.json(noteData);
})

module.exports = router;
