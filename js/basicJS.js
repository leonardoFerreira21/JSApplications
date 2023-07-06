/* 
 JavaScript Tipos de variável e comandos básicos
*/


//Escreve no console
console.log('Hello World!');

//Exemplo de declaração de função
function teste(i,j){
   
   //Variáveis no js: let, var e const
   const constante = 1;
   var str = 'Leonardo';
   let result = i+j;

   //Typeof: printa o tipo de variável
   console.log(typeof(result));
   console.log(result);

}


//chamando função
teste(4,3);

//Operador aritmético para potencia **
let pot1 = 2;
let pot2 = 10;
let resultado = (pot1 ** pot2);
console.log(resultado);

//conversão para int e float
let num1 = parseInt('5.2');
let num2 = parseFloat('5');
console.log(num1 , num2)

