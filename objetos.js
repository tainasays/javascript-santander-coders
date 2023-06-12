// > OBJETOS

// Objeto acessado por chave e valor

// Como criar um objeto?

let pessoa = {
    nome: 'Thayna', 
    idade: 26,
    'nome-completo': 'Thayna Santana',
 }

 console.log(pessoa.nome)
 console.log(pessoa.idade)

 console.log(pessoa['nome-completo'])

 // Como add um par chave (um elemento)?

 pessoa.altura = 1.77
 console.log(pessoa)

 // Como remover elementos?
 delete pessoa['nome-completo']
 console.log(pessoa)

 // Como percorrer?

 for (let chave in pessoa) {
        console.log(chave, pessoa)
 }