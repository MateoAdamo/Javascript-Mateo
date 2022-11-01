alert("Bienvenido/a a Todofutbol")

let cantidadProductos = parseInt(prompt("Ingrese cantidad de productos"))
let producto = prompt("remera, pelotas, botines y medias")
for (let i = 0; i < cantidadProductos; i++) {
     console.log( " " + producto)
}
 
switch (producto) { 
    case "remera":
        console.log("La remera cuesta $1500")
        break

    case "pelotas":
    console.log("Las pelotas cuestan $1000")
        break

    case "botines":
    console.log("Los botines cuestan 10000")
     break

    case "medias":
    console.log("Las medias cuestan $500")
    
      break

    default:
        console.log("No hay stock de ese producto")
        break
}
