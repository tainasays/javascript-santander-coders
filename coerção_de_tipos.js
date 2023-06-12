// > COERÇÃO (CONVERSÃO) DE TIPOS

// COR DA FONTE: AMARELINHA - NUMERO OU BOOLEANO.   BRANCO - TEXTO

// 1. Coerção Explícita (manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero)

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)


console.log(Number('155'))
console.log(Boolean(0))

// 2. Coerção Implícita (automática)

console.log(10 + 1);
console.log('10' + '1')
console.log(10 + '1')           //O JS vai cocatenar, MAS

console.log(10 - '1')       //O JS vai realizar a operação
console.log(10 - 'gfd')     //O JS vai retornar NaN (Not a Number)

// EXEMPLOS
console.log(2 + 3 + 4 +"50");

console.log("5" + 2 + 3 + 4);

console.log("10" - "4" - "3" - 2 + "5");

