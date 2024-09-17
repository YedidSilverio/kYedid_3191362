// Lista de productos disponibles en la tienda
var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

// Carrito de compras (arreglo vacío)
var carrito = [];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Agregar nuevo producto\n";
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

// Función para agregar un nuevo producto a la lista
function agregarNuevoProducto() {
    var nombreNuevoProducto = prompt("Ingrese el nombre del nuevo producto:");
    var precioNuevoProducto = parseFloat(prompt("Ingrese el precio del nuevo producto:"));

    if (nombreNuevoProducto && !isNaN(precioNuevoProducto) && precioNuevoProducto > 0) {
        productos.push({ nombre: nombreNuevoProducto, precio: precioNuevoProducto });
        console.log('Producto "' + nombreNuevoProducto + '" agregado con éxito.');
    } else {
        console.log("Entrada no válida. Asegúrese de ingresar un nombre y un precio correcto.");
    }
}

// Bucle principal de la tienda
var seleccion;
do {
    seleccion = prompt(mostrarMenu());

    // Convertir la selección ingresada a un número
    seleccion = Number(seleccion);

    // Verificar si la selección está dentro del rango válido
    if (isNaN(seleccion) || seleccion < 1 || seleccion > productos.length + 3) {
        console.log("Opción no válida, por favor intenta de nuevo.");
    } else if (seleccion >= 1 && seleccion <= productos.length) {
        // Si la selección es un producto, agregarlo al carrito
        agregarAlCarrito(seleccion - 1);
    } else if (seleccion === productos.length + 1) {
        // Si la selección es ver el carrito y el total acumulado
        mostrarCarritoYTotal();
    } else if (seleccion === productos.length + 2) {
        // Si la selección es añadir un nuevo producto
        agregarNuevoProducto();
    }
} while (seleccion !== productos.length + 3); // Continuar hasta que el usuario elija "Salir"

console.log("Gracias por visitar la tienda.");
