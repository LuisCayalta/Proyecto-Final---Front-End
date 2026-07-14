const navContent = document.getElementById('padreCarro');
const ulContent = navContent.querySelector('#ulGuia');
const mainContent = document.getElementById('contenidoTotal');
const carroTotal = mainContent.querySelector('#carroProductos');
const seccionOpc = mainContent.querySelector('#desplegableMenu');

const carroLista = JSON.parse(localStorage.getItem('carritoLimpio')) || [];

import { deleteBTN, desplegar } from "./funciones.js";
import { temas } from "./arrays.js";

let costoFinal = 0;

desplegar(seccionOpc, temas);

carroTotal.innerHTML = '';

carroLista.forEach(prod => {
    const nombreProduct = prod.nombre || prod.title;
    const precioProduct = prod.precio;

    costoFinal += precioProduct;

    const tarjetaHorizontal = document.createElement('div');
    tarjetaHorizontal.classList.add('itemCarrito');

    tarjetaHorizontal.innerHTML = `
        <h2>${nombreProduct}</h2>
        <p>Precio: $${precioProduct.toLocaleString('es-AR', {maximumFractionDigits:0})}</p>
        <button type="button" class="btnEliminar">eliminar del carrito</button>
    `;
    const btmDelete = tarjetaHorizontal.querySelector('.btnEliminar');
    deleteBTN(prod, btmDelete, carroLista);
    carroTotal.appendChild(tarjetaHorizontal);
});

const contenedorTotal = document.createElement('div');
contenedorTotal.classList.add('seccionTotal');
contenedorTotal.innerHTML = `
    <h3>Total a pagar: $${costoFinal.toLocaleString('es-AR', {maximumFractionDigits:0})}</h3>
`;
carroTotal.appendChild(contenedorTotal);