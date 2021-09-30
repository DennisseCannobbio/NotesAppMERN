require('dotenv').config()

const app = require('./app')
require('./database')

//Inicio Programa
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))
