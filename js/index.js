alert ("compra hasta 30 productos")

   //desde ; hasta ; actual
   //CANTIDAD DE Productos 30
for(let i =1; i <= 30; i++){

console.log(`productos ${i} `)
}


let cantidadDeProductos = parseInt(prompt("ingresa cantidad de  productos "))

let Cantidadmaxima = 30;

for(i = 1; i<=cantidadDeProductos; i++){
Cantidadmaxima += i
    document.write(cantidadDeProductos +"<br>"+"Productos")
}

//while
let IngresaTuNombreYApellido = prompt('Ingresa tu nombre y Apellido para recibir tu compra-  Cuando quieras finalizar Ingresa n° 9')

let informe
while(IngresaTuNombreYApellido != '9'){
    informe = informe + IngresaTuNombreYApellido

    IngresaTuNombreYApellido = prompt(' Ingresa tu nombre y apellido, si terminaste ingresa 9 ')

    
}
console.log(informe)


