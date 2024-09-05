// Função para resolver uma equação de segundo grau
//ax²+bx+c

function resolverEquaçãoSegundoGrau(a,b,c)
{
    //Pesso 1: Calcular o delta 
    // o delta nos ajuda a determinar o número de soluções reais :)

    let delta = b*b-4*a*c  

    //Passo 2:Verificar se o delta é negativo,zero ou positivo

    if(delta<0){

       // se delta <0, a equação não tem soluções reais

       console.log("A equação não tem soluções reais")
    }
    else if (delta===0){
        // se delta for igual a zero, a equação tem raízes iguais

        let x = -b/(2*a)

        console.log("A euação tem uma solução real, x=",x)
    }
    else{
        // se delta for positivo, a equação tem duas soluções diferentes

        let X1 = (-b+Math.sqrt(delta)/(2*a))

        let X2 = (-b-Math.sqrt(delta)/(2*a))

        console.log("A equação tem duas raizes: ", X1, "e" ,X2)
    }
}
resolverEquaçãoSegundoGrau(15,90,75)






