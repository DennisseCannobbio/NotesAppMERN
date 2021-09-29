require('dotenv').config()

const app = require('./app')
require('./database')

//Inicio Programa
async function main() {
   await app.listen(5000)
   console.log('Server on port 5000')
}

main()