/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}

const leerreceta = (pastelLeerReceta, callback) => {
    let error = null;
    setTimeout (() => {
       pastelLeerReceta.recetaLeida = true;
       
       if (!pastelLeerReceta.recetaLeida) {
            error = "No ha sido leida la receta";
       }
       callback(error, pastelLeerReceta)
    }, 2000);
};

const ingredientes = (cingredientes, callback) => {
    let error = null;
    setTimeout(() => {
        ingredientes.cingredientes = true;

        if (!ingredientes.cingredientes) {
            error= "No se encontraron los ingredientes";
        }

        callback(error, cingredientes);
    }, 1000);
};

const masa = (masaPreparada, callback) => {
    let error = null;
    setTimeout(() => {
        masa.masaPreparada = true;

        if (!masa.masaPreparada) {
            error= "Se nos olvido preparar la masa";
        }

        callback(error, masaPreparada);
    }, 4000);
};

const hornear = (pastelHorneado, callback) => {
    let error = null;
    setTimeout(() => {
        hornear.pastelHorneado = true;

        if (!hornear.pastelHorneado) {
            error= "Se nos olvido preparar la masa";
        }

        callback(error, pastelHorneado);
    }, 500);
};

const decorar = (pastelDecorado, callback) => {
    let error = null;
    setTimeout(() => {
        decorar.pastelDecorado = true;

        if (!decorar.pastelDecorado) {
            error= "Se nos olvido preparar la masa";
        }

        callback(error, pastelDecorado);
    }, 500);
};

leerreceta({ ...pastel }, (error, pastelLeerReceta) => {
    if (error) {
        console.log("error:", error);
        return; // Salte
    }

    ingredientes({ ...pastelLeerReceta }, (error, cingredientes) => {
        if (error) {
            console.log("error", error);
            return;
        }

        masa({ ...cingredientes }, (error, masaPreparada) => {
            if (error) {
                console.log("error", error);
                return;
            }

            hornear({ ...masaPreparada }, (error, pastelHorneado) => {
                if (error) {
                    console.log("error:", error);
                    return; // Salte
                }

                decorar({ ...pastelHorneado}, (error, pastelDecorado) => {
                    if (error) {
                        console.log("error:", error);
                        return; // Salte
                    }
                
                    console.log("Exito", pastelDecorado)
                });
            });
        });
    });
});


