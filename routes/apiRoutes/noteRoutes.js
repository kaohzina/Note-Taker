const router = require('express').Router();
let db = require('../db/db.json')
const fs = require('fs')


router.get("/notes", (req, res) => {
    res.json(db);
});

router.post("/notes", (req, res) => {
    
    const newNote = req.body;
    db.push(newNote);
    res.json(db);
})

router.delete("/notes/:id", (req, res) => {
    let noteID = req.params.id.toString();
    
    const newData =db.filter(note => note.id != noteID);
    console.log('we got halfway', newData)
    db = newData;
    res.json(db);
});
module.exports = router;