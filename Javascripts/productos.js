import { agregarProducto, agregarProductoPropio} from "./funciones.js";
import {clavesProductos, productosProp} from "./arrays.js";

const Guia = document.getElementById('padreCarro');
const listaGuiaProd = Guia.querySelector('#ulGuia');

clavesProductos.forEach(valor => {
    const valClave = document.createElement('li');
    valClave.id = `${valor.id}`;
    valClave.innerHTML = `<a href="${valor.linkNav}">${valor.nombreNav}</a>`;
    listaGuiaProd.appendChild(valClave);
});

productosProp.forEach(productoActual => {
    agregarProductoPropio(productoActual);
});

fetch('https://fakestoreapi.com/products')
.then(productos => productos.json())
.then(productoArray => {
    const productoFilter = productoArray.filter(producto => producto.category === 'electronics');
    productoFilter.forEach(productoActual => {
        agregarProducto(productoActual);
    });
})
.catch(err => console.error("Error cargando productos:", err));