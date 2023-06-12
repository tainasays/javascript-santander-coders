// > LAÇOS DE REPETIÇÃO

// while - estrutura não controlada != for

const input = require('readline-sync')

const numero_sorteado = 5;

let numero = Number(input.question('Qual numero voce escolhe? ') )         // ATEÇÃO: ela sempre vai ler como string, texto, caso queira converter pra número, é preciso a conversão

while (numero !== numero_sorteado) {
    console.log('Você errou o número, tente novamente...')

    numero = Number(input.question('Qual numero voce escolhe? '))
}
                                                                // Repete o elemento até a condição ser VERDADEIRA
console.log('Você acertou!')