// ejercico 1 //

function verificarParImpar(numero) {
    if (numero % 2 == 0) {
      console.log("El número " + numero + " es par.");
    } else {
      console.log("El número " + numero + " es impar.");
    }

    
  }

  verificarParImpar(4);
  verificarParImpar(7);
  verificarParImpar(10);  
  

  // ejercicio 2//

  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log("El número " + num1 + " es mayor que " + num2 + ".");
    } else if (num2 > num1) {
      console.log("El número " + num2 + " es mayor que " + num1 + ".");

    }
  }

  compararNumeros(10,22);

  // ejercicio 3//

  function multiploDe5 (num){

  if (num % 5 === 0) {
    console.log("El número " + num + " es multiplo de 5 "); 
  }

  else {
    console.log("El número " + num + " no es multiplo de 5 ");
  }
}

multiploDe5 (21);

// ejercicio 4//

function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  imprimirNumerosHasta (10);

  // ejercicio 5//

  function palabraYnumero (palabra, numero) {
    for (let i = 0; i < numero; i++) {
      console.log(palabra);
    }
  }

  palabraYnumero ("tres",3);    


  // ejercicio 6//

  function imprimirValores(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  const ensalada = ["lechuga", "tomate", "cebolla"]

  imprimirValores(ensalada)

  // ejercicio 7//

  function noImprimirEl5(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { 
        console.log(array[i]);
      }
    }
  }

  const decena = [1,2,3,4,5,6,7,8,9,10]

  noImprimirEl5(decena);

  // ejercicio 8//

  function imprimirVecesArray(array, numero) {
    for (let i = 0; i < array.length; i++) {
      const resultado = array[i] * numero;
      console.log(resultado);
    }
  }

  const numeros = [1, 2, 3, 4, 5];

  imprimirVecesArray (numeros,3);




  