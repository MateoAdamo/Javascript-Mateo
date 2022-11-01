
/*alert("Bienvenido/a a Todofutbol")
do {
    
let cantidadProductos = parseInt(prompt("Ingrese cantidad de productos"))
let producto = prompt("remera, pelotas, botines y medias")

if (producto < ) {
    
} else {


} 



 } while (condition);








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


*/
let numero1 = parseInt(prompt("ingrese numero 1"))
let numero2 = parseInt(prompt("ingrese numero 2"))
let opcion

do {
    opcion = parseInt(prompt("ingrese 1 para sumar/ingrese 2 para restar/ingrese 3 para multiplicar/4 para dividir /0 para salir"))
    
    if (opcion === 1){
        console.log(numero1 + numero2)

    } else if (opcion === 2) {
        console.log(numero1 - numero2)

     } else if (opcion === 3) {
        console.log(numero1 * numero2) 
     } else if (opcion === 4) {
        console.log(numero1 % numero2)
     }  
    } while (opcion != 0) {
        console.log("Se a cerrado la calculadora")
    }