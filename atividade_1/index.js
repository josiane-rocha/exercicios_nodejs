// ## Importe a biblioteca ##

let rs = require("readline-sync")

// ## Faça o código ##

let numVoo = rs.question (console.log("Por favor, me informe o número do seu vôo ?" ))

let fileira = rs.question (console.log("Qual fileira deseja sentar ? (A, B, C ou D)" ))

console.log ("=======================================================================")

console.log ("O número do seu vôo é " + numVoo)

console.log ("A sua fileira escolhida é " + fileira)
