const listaObtenida = document.getElementById('listaGuia');
const presentar = document.getElementById('Presentacion');
const principalMenu = document.getElementById('menu');
const tarProduct = principalMenu.querySelector('#destacado')
const fakeapi = fetch('https://fakestoreapi.com/products');
const tarReseña = principalMenu.querySelector('#reseña');
const fondoRuta = "../Multimedia/fondovid.mp4";
const logoRuta = "../Multimedia/loguito2.png";

import {clavesPrincipal, resenias} from './arrays.js'
import {mostrarPres, mejoresPROD, prodDestacado, conversionPesos, reseñaLista} from './funciones.js';

clavesPrincipal.forEach(valor => {
    const valClave = document.createElement('li')
    valClave.innerHTML = `<a href = "${valor.linkNav}">${valor.nombreNav}</a>`;
    listaObtenida.appendChild(valClave)
});

mostrarPres(presentar, fondoRuta, logoRuta);
mejoresPROD(fakeapi, tarProduct, prodDestacado, conversionPesos);
reseñaLista(tarReseña, resenias)
