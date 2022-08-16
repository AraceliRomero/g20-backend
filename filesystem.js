// const fs = require("fs")

// console.log("fs write", fs.writeFile)

// fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (error) => {
//     // Logica negativa

//     if(error) {
//     console.log("error", error)
//     return // Salte
//     }

//     // Si no, todo lo demas 
//     console.log("el archivo fue creado exito")


// })

// TAREA  FS.READfILE/PATH

// fs.readFile("text1txt", "utf-8", (err, data)=> {
//    // Logica negativa 
//     if (err) {
//         throw err
//     }
//     // continuamos 
//     console.log(data)
// })
// const fs = require("fs")

// fs.appendFile("text1.txt, "Eso es Nuevo", "utf8", (err) => {
//     if (err) {
//         console.log("err", err)
//         return
//     }
//     console.log ("Tú archivo fue actualiado con este ?")
// })

// const fs = require("fs")

// // fs.unlinkFile("text1.txt", "utf-8", (err)=> {
// //     if (err) {

// //     }
// // })

// const files = fs.readdirSync("directorio", "utf-8") 
// console.log(files)

// ejercicio 1 de clase 3

const path = directorio
fs.readdir("directorio", "utf-8", (err, files)=> {
    if(err) throw err;

    if(files.length === 0){
        console.log("No hay archivos");
        return
    }
    

    // las calbas es una funcion 
    // A las funciones le podemos en  los parametros
    // continuar con que si tenemos archivos 

 
    files.forEach((cv) => {
        fs.unlink(`${patch}/${cv}`, (err) => {
        if (err) {
            console.log("error", err);
            return
        }
        console.log("Tu archivo fue eliminado con éxito")
            });
        })
    })

files()

