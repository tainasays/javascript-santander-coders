// > ARRAYS (permite que se guarde inúmeras informações)

// Como criar um array?

let arr = ['Lucas', 27, 1.77, true]

console.log(arr)

// Como acessar os elementos do array? Pelos ÍNDICES, que começam pelo 0 !!!!!


console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// Como saber o tamanho do array?

console.log('Tamanho do array:', arr.length)

// Percorrendo arrays (3 formas)

for (let i = 0; i <4; i++) {                // Pra ficar mais dinâmico: substituir o 'i<4' por 'arr.lenght'
    console.log(arr[i])
}

console.clear()

for (let elemento of arr) {         //Pra cada elemento/ var da array, vc percorre um elemento. Percorre cada elemento do meu array
    console.log(elemento)
}