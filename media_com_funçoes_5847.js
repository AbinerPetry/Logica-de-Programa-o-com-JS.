function calcularMedia(n1,n2,n3,n4){
    let media = (n1+n2+n3+n4)/4
    return media
}

// Usando a função para calcular as notas dos alunos

let notaBrenda = calcularMedia(0.5,5.0,7.0,8.0)
console.log('A nota da Brenda é',notaBrenda) 

let notaJoe = calcularMedia (2.0,10.0,8.5,10.0)
console.log("A nota de Joe é", notaJoe)