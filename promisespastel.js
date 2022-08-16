/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

//  const pastel = {
//     recetaLeida : false,
//     ingredientesConseguidos: false,
//     masaPreparada: false,
//     pastelHorneado: false,
//     pastelDecorado: false
// };

// const leerreceta = (pastelLeerReceta) => {
//     return new Promise ((resolve, reject) => {
//     setTimeout (() => {
//         pastelLeerReceta.recetaLeida = true;

//         if (!pastelLeerReceta.recetaLeida) {
//             reject("No sabemos leer");
//         }

//         resolve(pastelLeerReceta);
//     }, 5000);
// });
// };

// const ingredientes = (cingredientes) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             ingredientes.cingredientes = true;
    
//             if (!ingredientes.cingredientes) {
//                 reject("ya no había en la tienda");
//             }
    
//             resolve(cingredientes);
//         }, 3000);
//     });
// };

// const masa = (masaPreparada) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             masa.masaPreparada = true;
    
//             if (!masa.masaPreparada) {
//                 reject("no supimos como hacerla");
//             }
    
//             resolve(masaPreparada);
//         }, 2000);
//     });
// };

// const hornear = (pastelHorneado) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             hornear.pastelHorneado = true;
    
//             if (!hornear.pastelHorneado) {
//                 reject("el horno no estaba prendido");
//             }
    
//             resolve(pastelHorneado);
//         }, 1000);
//     });
// };

// const decorar = (pastelDecorado) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout (() => {
//             decorar.pastelDecorado = true;
    
//             if (!decorar.pastelDecorado) {
//                 reject("algo paso con el betún");
//             }
    
//             resolve(pastelHorneado);
//         }, 1000);
//     });
// };

// const pastelLeerReceta = leerreceta ({ ...pastel});
// pastelLeerReceta
//     .then((pastelLeerReceta) => {
//         console.log(pastelLeerReceta);

//         ingredientes({ ...pastelLeerReceta})
//         .then((cingredientes) => {
//             console.log("se compraron los ingredientes", cingredientes);

//             masa({...masaPreparada})
//             .then((masaPreparada) => {
//                 console.log("la masa fue preparada".masaPreparada);

//                 hornear({...pastelHorneado})
//                 .then((pastelHorneado) => {
//                     console.log("el pastel ya está en el horno".pastelHorneado);
                    
//                     decorar({...pastelDecorado})
//                     .then((pastelDecorado) => {
//                         console.log("el pastel ya está listo".pastelDecorado);

//                         .catch((error) => {
//                             console.log("error", error);
//                         });
//                     })
//                      .catch((error) => {
//                         console.log("Error", error);
//                       });
//                  })
//                 .catch((error) => {
//                      console.log("error", error);
//                  });
//             })
//             .catch((error) => {
//                 console.log("error", error);
//             });
//         })
//         .catch((error) => {
//     console.log("error", error);
//     });
//     })

