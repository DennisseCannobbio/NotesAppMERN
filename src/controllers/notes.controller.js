const notesCtrl = {}

notesCtrl.getNotes =  (req, res) => res.json({message: []})

notesCtrl.createNote = (req, res) => res.json({message: 'Creating Note'})

notesCtrl.getNote = (req, res) => res.json({message: 'Note'})

notesCtrl.updateNote = (req, res) => req.json({message: 'Updating Note'})

notesCtrl.deleteNote = (req, res) => req.json({message: 'Deleting Note'})

module.exports = notesCtrl