const userCtrl = {}

userCtrl.getUsers = (req, res) => res.json({message: 'All Users'})

userCtrl.createUser = (req, res) => res.json({message: 'Creating User'})

userCtrl.deleteUser = (req, res) => res.json({message: 'Deleting User'})

module.exports = userCtrl