// ## Importe a biblioteca ##

let rs = require('readline-sync')

// ## Faça o código ##

let laterais = rs.question (console.log("Qual a medida das laterais do quadrado?"))
let contador = 4

while (contador * laterais) {
    console.log(contador * laterais)
    break
}
