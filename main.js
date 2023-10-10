// // los comentarios se hacen con doble barra "//"


// //console.log("hola!")

// alert("estamos aprendiendo javascript!! asi que te voy a ayudar con unas cuentas")

// let numero1 = prompt("ingresa un numero")

// let numero2 = prompt("ingresa otro numero")

// convirtiendo cadena de texto en numero

// numero1 = parseFloat(numero1);
// numero2 = parseFloat(numero2);

// console.log(numero1)
// console.log(numero2)

// const suma = numero1 + numero2;

// const resta = numero2 - numero1;

// console.log("la suma de tus numeros da: " + suma)

// alert("Tus numeros sumaron:" + suma)

// console.log("la resta de tus numeros da: " +resta)

// alert("pero si restamos el segundo numero al primero da: " + resta)

// let numero3 = prompt("ingrese nuevamente un numero")

// let numero4 = prompt("ingrese otro numero xd")

// numero3 = parseFloat(numero3);
// numero4 = parseFloat(numero4);

// const multiplicar = numero3 * numero4;
// const dividir = numero3 / numero4;

// console.log("tus numeros multiplicados dan: " + multiplicar)

// alert("tus numeros multiplicados dan: " + multiplicar);

// console.log("y si los divido dan: " + dividir)

// alert("y si los divido dan: " + dividir);

// let numero5 = prompt("vamos con las potencias ahora")

// numero5 = parseFloat(numero5);

// const potencia = numero5 ** 2;

// console.log("tu numero elevado al cuadrado es de: " + potencia)

// alert("tu numero elevado al cuadrado es de: " + potencia);

// let nombreUsuario = prompt("ya van muchos numeros no ? decinos como te llamas?")

// console.log("Bienvenido " + nombreUsuario)

// let numero6 = prompt("escribi un numero que vamos a hacer cuentas")

// let numero7 = prompt("escribi otro numero con el mismo fin")

// numero6 = parseFloat(numero6);
// numero7 = parseFloat(numero7);

// const punto7s = numero6 + numero7;
// const punto7r = numero6 - numero7;
// const punto7m = numero6 * numero7;
// const punto7d = numero6 / numero7;

// console.log("la suma de tus numeros da: " + punto7s)
// console.log("la resta de tus numeros da: " + punto7r)
// console.log("la multiplicacion de tus numeros da; " + punto7m)
// console.log("la division de tus numeros da: " + punto7d)

// alert("los resultados estan en la consola")



// let numeroP = 22

// let numeroI = 33





// let nombreUsuario = prompt("Hola! como estas? por favor ingresa tu nombre para poder hablar con vos")

// alert("Bienvenido " + " " + nombreUsuario + " " + "a nuestro super negocio!")

// function ComprarRopa(nombre, precio){
//     let pago = Number(prompt("decime con cuanto abonas por el" + nombre))
//     if (pago >= precio){
//         let vuelto = pago - precio;
//         let confirmacion = confirm("Estas seguro que queres comprar" + nombre + "a" + precio);
//         if (confirmacion) {
//             alert("Buenisimo!! compraste" + nombre + "." + "tu vuelto es de" + vuelto);
//         } else{
//             alert("Uhh! tu compra de" + nombre + "fue cancelada");
//         }
//     } else {
//         let faltante = precio - pago;
//         alert("te falta $" + faltante + "para poder llevarte" + nombre);
//     }
// }


/* PRIMER CASO */


function mostrarAlert(mensaje) {
    alert(mensaje);
}

function preguntarNombre() {
    const nombre = prompt("Hola!! como estas? por favor te pedimos que nos digas como te gustaria que te llamemos");
    mostrarAlert(`Bienvenido a nuestro super negocio ${nombre}!!!!!`);
    return nombre;
}

function preguntarCategoria() {
    let opcion;
    while (opcion !== "1" && opcion !== "2" && opcion !== "3") {
        opcion = prompt("¿Que te gustaria comprar?\nTenemos remera de futbol que seria la opcion 1, despues tenemos short de futbol que seria la opcion 2 y tambien tenemos botines de futbol que seria la opcion 3:");
    }
    return opcion;
}

function confirmarCompra(categoria) {
    let producto = "";
    let precio = 0;


    if (categoria === "1") {
        producto = "remera de futbol";
        precio = 15000; // Precio de las remeras de futbol (puedes cambiarlo)
    } else if (categoria === "2") {
        producto = "short de futbol";
        precio = 13000; // Precio de los shorts de futbol (puedes cambiarlo)
    } else if (categoria === "3") {
        producto = "botin de futbol";
        precio = 32000; // Precio de los botines de futbol (puedes cambiarlo)
    }

    const confirmacion = confirm(`Buenisimo!! elejiste ${producto}. El costo es de  $${precio}. ¿Queres comprar?`);

    if (confirmacion) {
        const direccion = prompt("Por favor, decinos a que direccion te gustaria recibir el producto");
        mostrarAlert(`Perfecto! su ${producto} sera enviado a : ${direccion}.`);
        mostrarAlert("Muchisimas gracias por la compra! Esperamos verte pronto por aca.");
    } else {
        mostrarAlert("Muchas gracias por su visita.");
    }
}

function todo() {
    const nombre = preguntarNombre();
    const categoria = preguntarCategoria();
    confirmarCompra(categoria);
}

todo();


/* SEGUNDO CASO */




