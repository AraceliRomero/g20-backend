/**
 * Construir una funcion que separe los nombres largos de los cortos 
 * un nombre largo es aquel que supera los 4 caracteres de longitud.
 * 
 * 
 * Input: ["Rodolfo" ...]
 * Destructurando
 * Output: const [nombresCortos, nombresLargos] = funcion(nombres) // retornando esto
 */

 const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ]

  const separateNames = (names) => {
    const largerNames = []
    const shortedNames = []
  
    names.forEach((name) => {
      if(name.length < 4) {
        shortedNames.push(name)
      } else {
        largerNames.push(name)
      }
    })
  
    return [shortedNames, largerNames]
  }
  
  const [nombresCortos, nombresLargos] = separateNames(nombres)
  console.log("nombres cortos", nombresCortos)
  console.log("nombres largos", nombresLargos)
  


//  ESTTRUCTURACION DE DATOS, ESTUDIAR RESPECTO A ESTE TEMA //


//   Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
// Input: ["Ale", "Mariana", "Adrian"]...
// Output:
// {
// 	0: {
// 		name: "Ale", -> string
// 		length: 3, -> numero
// 		isGreaterThanFour: true -> booleano
// 	}
// }

//  apuntadores revisar mas  en JS
// permite un elemento interable  sitaxis spread 
// const transformarNombres = (names) => {
//     const objetoDeKoders = {} // lo hicieron vacio 

//     names.forEach((valor, indice) => {
//         objetoDeKoders[indice],
//         name: valor, 
//         length: valor, length, 
//         isGreaterTahnfour: valor.length < 3
//     }
//     })

//     return objetoDeKoders
// }


// // * REDUCE 
// const transformarNombre = (names) => {
// // 1-> callback -> acumulador, currentValue, indice, arrey 
// // 2-> valor inciial del acumulador 

//     names.reduce((accumulador, valorActual, indice) => {
//         return {
//             ...accumulador, // spread operator
//             [indice]: {
//                 name: valorActual, 
//                 length: valorActual, length, 
//                 isGreaterThanFour: valor, valorActual, length > 3,
//             }
//         }
//     }, {})

//     return 
// }









