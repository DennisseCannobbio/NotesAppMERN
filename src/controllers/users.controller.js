const userCtrl = {}
const Users = require('../models/Users')

userCtrl.getUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
}

userCtrl.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id)
    res.json(user)
}

userCtrl.createUser = async (req, res) => {
    const { username } = req.body
    const newUser = new Users({
        username: username
    })
    await newUser.save()
    res.json({message: 'User Created'})
}

userCtrl.updateUser = async (req, res) => {
    const { username } = req.body
    await Users.findByIdAndUpdate(req.params.id, {
        username: username
    })
    res.json({message: 'User Updated'})
}

userCtrl.deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    res.json({message: 'User Deleted'})
}

module.exports = userCtrl