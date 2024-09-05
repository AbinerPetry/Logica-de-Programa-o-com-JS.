// Um guerrero acaba de entrar nu castelo que foi invadido por goblins, para essa misão ele leva em seu inventario

let inventario = ['Espada longa europeia ', '3 poções de regeneração', 'armatura de couro de dragao', '1 poção de ']
 
console.log('Um grupo de goblins apareceu! Prepare-se para a batalha.');
// O guerrero se prepara para o confronto 
console.log('seu inventário inicial:',inventario);

let novoItem = 'ovo de dragão'
 
inventario.push(novoItem);

console.log('você encontrou um baú! Novo item adicionado ao seu inventario', inventario);

console.log('Um goblin apareceu! Prepare-se para a batalha.');

let itemUsado1= inventario[0] ;
console.log('você ataca o goblin com sua', itemUsado1);

console.log('Você derrota o goblin e continua a sua jornada')