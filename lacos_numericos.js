// > LAÇOS NUMÉRICOS: 'for'

// LAÇO: UMA ESTRUTURA
// INTERAÇÃO (i) é uma volta que ele dá 


// O problema
// Média de três notas, sem precisar utilizar 3 variáveis para "guardar" esses valores.


// Acumulador (variável que recebe ele mesmo + x)

// let acumulador = 0;

// acumulador = acumulador + 10

// acumulador += 2

// acumulador++                      // 1 unidade dentro dessa variável

// console.log(acumulador)

// Estrutura 'for' (estrutura de repetição controlada, sabemos quantas vezes queremos que se repita)
// a) a variável 'i' vai dizer quantas vezes vai acontecer, b) condição de parada, c) qual é o passo da repetição -> evitando, assim, um looping infinito
// const input = require('readline-sync;')

// for (let i = 0; i < 4; i++) {
//     console.log('Repetição', i)
// }



// Resolvendo o problema inicial:

const input = require('readline-sync');

let nota;
let soma = 0;
let conta = 0;



for (let i = 0; i < 3; i++) {
    nota = Number(input.question('Informe a nota do aluno: '))
    conta++
    soma = soma + nota

} console.log(`A média do aluno é ${soma / conta}.`)                // Conceito de TEMPLATE STRING

//ou

console.clear();

let nota1;
let soma1 = 0;

for (let i = 0; i < 3; i++) {
    nota1 = Number(input.question('Informe a nota da aluna: '))

    soma1 = soma1 + nota1
}
console.log(`A média da aluna é: ${soma1 / 3}.`)