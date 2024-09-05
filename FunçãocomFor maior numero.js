const numeros = [11, 15, 18, 14, 12, 13]
function devolverMaiorNumer (Array)  {
    let maiorNumero = 0

for(let i = 0; i < Array.length; i++) {
    let numeroAtual = Array[i]

    if(numeroAtual >= maiorNumero) {
        maiorNumero = numeroAtual
    }
}
console.log("O maior número do array é " , maiorNumero)
}
devolverMaiorNumer(numeros)