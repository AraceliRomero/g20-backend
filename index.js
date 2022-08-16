// HTTP
const http = require("http")

//1. Se crea un servidos http
// 2. poner a su servidor a escuchar 
// 3. Port
// EMPOIT
/**
 * Punto final
 * 1. Metodo => GET; PATCH, PUT, POST, DELETE 
 * 2. url => local hot 
 */
const server = http.createServer((request,response) => {

    //Leer el request

    const{ url, method} = request

    console.log("method", method)
    console.log("url", url)

    
    // GET-> localhost:8080
    //BIenvenido estas en el get, estas leyendo 

    if(method === "GET" && url === "/") {
        response.write("hola, bienvenido a mi servidor modificado para insomnia, lo modifique otra vez")
        response.end()  // ya finalizo }
    }


    //POST -> localhost:8080

    // responder
//     response.write("hola, bienvenido a mi servidor modificado para insomnia, lo modifique otra vez")
//     response.end()  // ya finalizo }

// }) 
// 2. parametros
// 1 => PORT
// 2 => callback  => lo que se va a hacer cuando se empiexe a escuchar 
server.listen(8080, () => {
    console.log("Server listening ...")
})


