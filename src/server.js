const app = require('./app')

//Inicio Programa
async function main() {
   await app.listen(5000)
   console.log('Server on port 5000')
}

main()