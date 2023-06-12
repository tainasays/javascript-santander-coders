// > FUNÇÕES

// A função é um trecho do seu código que você pode reaproveitar várias vezes.

// Como criar uma função no JS?
// 1. vc define a função, 2. depois chama ela

function saudacao(nome, elogio = 'lindo') {               // é possível passar um parâmetro default (pra quando não passo)
    
    console.log(`Olá, seja bem vindo, ${nome}! Você é muito ${elogio}!`)
    
}

saudacao('Bento', 'bonito')         // se nao passar o parâmetro, vai dar 'undefined'




// Como enviar parâmetros para as funções?
// Os '()' carregam os parâmetros


// Retorno das funções:

// A T E N Ç Ã O: RETORNO != IMPRESSÃO. A ideia da função é ser genérica: devemos sempre optar por RETORNAR.

function soma(numero1, numero2) {
    return numero1 + numero2                  // atenção: dps do RETURN, a função ACABA, a não ser que o retorno NÃO ocorra, a exemplo do caso 'if'
}

const resultado = soma(10, 20)

console.log(resultado)


