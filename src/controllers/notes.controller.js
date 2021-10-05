const notesCtrl = {}

const Notes = require('../models/Notes')

 notesCtrl.getNotes = async (req, res) => {
    //Busqueda de todas las notas en la base de datos
    const notes = await Notes.find()
    res.json(notes)
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Notes({
        title: title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save()
    res.json({message: 'Note saved'})
}

notesCtrl.getNote = async (req, res) => {
    const notes = await Notes.findById(req.params.id)
    res.json(notes)
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author} = req.body
    await Notes.findByIdAndUpdate(req.params.id, {
        title: title,
        content: content,
        author: author
    })
    res.json({message: 'Note Updated'})
}

notesCtrl.deleteNote = async (req, res) => {
    await Notes.findByIdAndDelete(req.params.id)
    res.json({message: 'Note Deleted'})
}

module.exports = notesCtrl