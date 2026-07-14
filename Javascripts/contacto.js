const todoContacto = document.getElementById('contacto');
const barraContacto = todoContacto.querySelector('#barraLateral');
const contactoContent = todoContacto.querySelector('#formContacto');

import { entradasForm, temas, clavesContacto } from "./arrays.js";
import { desplegar, regresarUl } from "./funciones.js";

regresarUl(barraContacto, clavesContacto);
desplegar(barraContacto, temas);


const contenedorForm = document.createElement('div');
contenedorForm.className = 'inputs-contenedor'; 
const contenedorTexto = document.createElement('div');
contenedorTexto.className = 'texto-contenedor'; 
const textoPres = document.createElement('h2');
textoPres.textContent = "¿Tienes alguna duda? dejanos tu consulta!";
contenedorTexto.appendChild(textoPres);

entradasForm.forEach(entrada => {
    const inputForm = document.createElement(entrada.etiqueta);

    inputForm.id = entrada.id;
    inputForm.className = entrada.clase;
    
    if(entrada.etiqueta === 'button'){
        inputForm.type = 'submit';
        inputForm.textContent = 'Enviar consulta';
    }
    else{
        inputForm.placeholder = entrada.mensajePlace;
    }
    contenedorForm.appendChild(inputForm);
});

contactoContent.append(contenedorTexto, contenedorForm);