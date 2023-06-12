// > ARRAYS - Parte 2 -  Métodos de Array

// Chamar uma função ()

const arr1 = [30, 12, 45, 34, 29]
let arr2 = []



// Fatiamento: slice
console.log(arr1.slice(0, 1))               // Não inclui o 2º parâmertro
console.log(arr1.slice(2))                  // A partir do 2 até o final, pois não há um fim definido, como se faltasse algum parâmetro

// Adicionando elementos: push | unshift
console.log('Antes de adicionar: ', arr2)

arr2.push(10, 20, 30)                       // push: inclui o elemento sempre no final da array
arr2.push(40) 

console.log('Depois de adicionar: ', arr2)

arr2.unshift(5)
console.log(arr2)                           // unshift: inclui o elemento no início do array
console.clear()

// Removento elementos: pop | shift
console.log('Antes de remover com o pop', arr2)        // vai remover, por padrão, o último elemento do array

console.log(arr2)

const elementoRemovido = arr2.pop()

console.log('O elemento removido foi ', elementoRemovido)

console.log('Antes de remover com o shift', arr2)
arr2.shift()
console.log('Depois de remover com o shift', arr2)          // O shift remove o primeiro elemento

console.clear()

// Concatenando arrays: concat
console.log('arr1', arr1)
console.log('arr2', arr2)
                                    // A ordem dos fatores importa
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// Buscando elementos: indexOf | lastIndexOf
console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(29)

console.log(indiceDoElemento34)
// se retornar '-1' é porque aquele índice NÃO existe dentro do array. se houver mais de um índice 34, o índice retornará o 1º. Se quisermos saber o último elemento, utilizamos lastIndexOf
console.clear()

let arr3 = [1, 2, 3, 3, 3]

console.log(arr3.lastIndexOf(3))

console.clear()

// Descobrindo a existência de um elemento: includes
console.log(arr1)

console.log(arr1.includes(10))      // Retorna verdadeiro ou falso, se incluir ou não aquele valor
console.clear()

// Invertendo arrays: reverse (serve para inverter uma array)

console.log('A arr1 normal: ', arr1)

const arr1Invertido = arr1.reverse()

console.log('A arr1 invertida: ', arr1Invertido)
