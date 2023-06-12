// > OPERADORES BOOLEANOS

// Igualdade:       == (ou ===)
// Desigualdade:    != (ou !==)
// Maior que:       >
// Menor que:       >
// Maior ou igual:  >=
// Menor ou igual:  <=

const numero = 10;

console.log(10 == 10);
console.log(numero == 10);
console.log(10 == '10');
console.log(numero === '10');           // Compara o CONTEÚDO & o tipo de VARIÁVEL. Recomendação: Utilizar sempre '===' para evitar bugs.

console.clear()

console.log(10 != 10);
console.log(10 != '10');
console.log(10 !== '10');       // Recomendável para pegar as minúncias!

// Conjunções Lógicas

// AND => &&
let idade = 18;
let temCNH = true;

const podeDirigir = idade >= 18 && temCNH === true

console.log('Pode dirigir?', podeDirigir)

// OR => ||
idade = 40;

const votoFacultativo = idade <=16 || idade >=80
console.log('Voto facultativo?', votoFacultativo)

// NOT => !

const gostoDoCurso = false
console.log(!gostoDoCurso)
