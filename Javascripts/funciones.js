const carritoArray = JSON.parse(localStorage.getItem('carritoLimpio')) || [];
const detallesProducto = document.getElementById('detalles');
const catalogo = document.getElementById('productContent');

export function conversionPesos(precProd) {
    let valorDolarArs = 1487;
    const conversion = precProd * valorDolarArs; 
    return conversion;
}

export function mostrarPres(pres, imgPres, logoPres) {
    pres.innerHTML = `
        <div class="multivid">
            <video src="${imgPres}" class="fondoIMG" autoplay muted loop></video>
        </div>
        <div class="ContentPres">
            <img src="${logoPres}" class="logoPNG"> <h1>V&Tech</h1>
        </div>
    `;
}

export function desplegar(desplegable, listaple) {
    const plegar = document.createElement('div');
    plegar.id = 'plegable';
    plegar.classList.add('plegaDiseño');
    
    const listaDesor = document.createElement('ul');

    listaple.forEach(tema => {
        const filaInfo = document.createElement('li');
        const labelInfo = document.createElement('label');
        labelInfo.setAttribute('for', tema.id);

        labelInfo.innerHTML = `
            <input type="radio" id="${tema.id}" name="color" class="radioTema">
            <span>${tema.nombre}</span>
        `;

        const inputRadio = labelInfo.querySelector('.radioTema');
        inputRadio.addEventListener('change', () => {
            document.documentElement.style.setProperty('--fondo-principal', tema.colores.fondo);
            document.documentElement.style.setProperty('--fondo-secundario', tema.colores.fondoSecundario);
            document.documentElement.style.setProperty('--color-texto', tema.colores.texto);
            document.documentElement.style.setProperty('--color-destacado', tema.colores.textoSecundario);
            
            localStorage.setItem('temaPreferido', tema.id);
        });

        filaInfo.appendChild(labelInfo);
        listaDesor.appendChild(filaInfo);
    });

    plegar.appendChild(listaDesor);
    desplegable.appendChild(plegar);
}

function actualizarContador() {
    const cantidadProducto = document.getElementById('elCarro');
    if (cantidadProducto) {
        cantidadProducto.innerHTML = `<a href="#listaCarro">Carrito = ${carritoArray.length}</a>`;
    }
}

export function deleteBTN(rmItem, clasePresion, lista){
    clasePresion.addEventListener('click', () =>{
        const sobreEscritura = lista.filter(prod => prod.id !== rmItem.id)
        localStorage.setItem('carritoLimpio', JSON.stringify(sobreEscritura));
        location.reload();
    })
}

function clickCarro(actual) {
    let modProduct = {...actual};
    if (modProduct.price && !modProduct.precio){
        modProduct.precio = conversionPesos(modProduct.price)
    }
    
    carritoArray.push(modProduct);
    localStorage.setItem('carritoLimpio', JSON.stringify(carritoArray));
    
    actualizarContador();

    if (typeof carroVisual === 'function') { 
        carroVisual(); 
    }
}

export function reseñaLista(tarOp, totalReseña){
    tarOp.innerHTML = '';
    totalReseña.forEach(cliente => {
        tarOp.innerHTML += `
        <div class="clienteReseña">
            <h2 class="nameClient">${cliente.nombreUser}</h2>
            <p class="mensage">${cliente.mensajeUser}</p>
        </div>
        `;
    });
}

export function prodDestacado(actual, conversion){
    const target = document.createElement('article');
    target.classList.add('articulo');
    target.innerHTML = `
        <div class="multimedia">
            <img src="${actual.image}" class="product">
        </div>
        <div class="producto">
            <h2>${actual.title}</h2>
            <p>$<span>Precio:${conversion(actual.price).toLocaleString('es-AR', {maximumFractionDigits:0})}</span></p>
            <p>calificacion: ${actual.rating.rate} votaciones: ${actual.rating.count}</p>
        </div>
    `;
    return target;
}

function mejorRating(prod){
    const mejores = [];
    prod.forEach(prodEs => {
        const promedio = prodEs.rating.rate * prodEs.rating.count;
        mejores.push({...prodEs, puntuacion : promedio}); 
    });
    mejores.sort((x, y)=> y.puntuacion - x.puntuacion);
    return mejores.slice(0, 3);
}

export function mejoresPROD(api, conteiner, prodDestacado, conver){
    api
    .then (productos => productos.json())
    .then (productoArray => {
        const productoFilter = productoArray.filter(producto => producto.category === 'electronics');
        const filterRating = mejorRating(productoFilter);
        conteiner.innerHTML = '';
        filterRating.forEach(product => {
            const tarjeta = prodDestacado(product, conver);
            conteiner.appendChild(tarjeta);
        });
    });
}

function detalsProducto(actual){
    detallesProducto.innerHTML = `
        <div class="infoAll">
            <iframe src="${actual.image}" class="vidmp"></iframe>
            <div class="infoProd">
                <h3>${actual.title}</h3>
                <p>${actual.description}</p>
                <p>Precio: <span>$${conversionPesos(actual.price).toLocaleString('es-AR', {maximumFractionDigits:0})}</span></p>
                <p>Calificacion: ${actual.rating.rate}</p>
                <p>Votos totales: ${actual.rating.count}</p>
            </div>
            <div class="footer">
                <button type="button" class="carrito2 bobtn subCarro">
                    <span>Agregar al carrito</span>
                </button>
                <button type="button" class="cerrar bobtn">
                    <span>Cerrar panel</span>
                </button>
            </div>
        </div>
    `;
    detallesProducto.style.display = 'block';

    const carriDetals = detallesProducto.querySelector('.subCarro');
    carriDetals.addEventListener('click', () => {
        clickCarro(actual);
    });

    const btnCerrar = detallesProducto.querySelector('.cerrar');
    btnCerrar.addEventListener('click', () => {
        detallesProducto.style.display = 'none';
        detallesProducto.innerHTML = '';
    });
}

export function agregarProducto(actual){
    const target = document.createElement('article');
    target.classList.add('articulo');
    target.innerHTML = `
        <div class="multimedia">
            <img src="${actual.image}" class="product">
        </div>
        <div class="producto">
            <h2>${actual.title}</h2>
            <p>$<span>Precio:${conversionPesos(actual.price).toLocaleString('es-AR', {maximumFractionDigits:0})}</span></p>
            <p>calificacion: ${actual.rating.rate} votaciones: ${actual.rating.count}</p>
        </div>
        <div class="btnd">
            <button type="button" class="subCarro">
                <img src="../Multimedia/shopping-cart.png" class="carri">
                <span>Agregar</span>
            </button>
            <button type="button" class="btnDetalles">
                <span>ver mas detalles</span>
            </button>
        </div>
    `;

    const btnDetailClick = target.querySelector('.btnDetalles');
    btnDetailClick.addEventListener('click', () => {
        detalsProducto(actual);
    });

    const carroPrincipal = target.querySelector('.subCarro');
    carroPrincipal.addEventListener('click', () => {
        clickCarro(actual);
    });

    if (catalogo) {
        catalogo.appendChild(target);
    }
}

function detalsProductoPropio(actual){
    detallesProducto.innerHTML = `
        <div class="infoAll">
            <video src="../Multimedia/${actual.video}" autoplay muted loop class="vidmp"></video>
            <div class="infoProd">
                <h3>${actual.nombre}</h3>
                <p class="tagline"><strong>Marca:</strong> ${actual.marca} | <strong>Línea:</strong> ${actual.linea}</p>
                <p class="descripcion">${actual.descripcion}</p>
                <p><strong>Estado:</strong> ${actual.Estado}</p>
                <p><strong>Lanzamiento:</strong> ${actual.Fecha}</p>
                <p class="precio">Precio: <span>$${actual.precio.toLocaleString('es-AR', {maximumFractionDigits:0})}</span></p>
            </div>
            <div class="footer">
                <button type="button" class="carrito2 bobtn subCarro">
                    <span>Agregar al carrito</span>
                </button>
                <button type="button" class="cerrar bobtn">
                    <span>Cerrar panel</span>
                </button>
            </div>
        </div>
    `;
    detallesProducto.style.display = 'block';

    const carriDetals = detallesProducto.querySelector('.subCarro');
    carriDetals.addEventListener('click', () => {
        clickCarro(actual);
    });

    const btnCerrar = detallesProducto.querySelector('.cerrar');
    btnCerrar.addEventListener('click', () => {
        detallesProducto.style.display = 'none';
        detallesProducto.innerHTML = '';
    });
}

export function agregarProductoPropio(actual){
    const target = document.createElement('article');
    target.classList.add('articulo');
    target.innerHTML = `
        <div class="multimedia">
            <img src="../Multimedia/${actual.img}" class="product" alt="${actual.nombre}">
        </div>
        <div class="producto">
            <h2>${actual.nombre}</h2>
            <p class="estado-tag">${actual.Estado}</p>
            <p class="precio-tag">$<span>${actual.precio.toLocaleString('es-AR', {maximumFractionDigits:0})}</span></p>
        </div>
        <div class="btnd">
            <button type="button" class="subCarro">
                <img src="../Multimedia/shopping-cart.png" class="carri">
                <span>Agregar</span>
            </button>
            <button type="button" class="btnDetalles">
                <span>ver mas detalles</span>
            </button>
        </div>
    `;

    const btnDetailClick = target.querySelector('.btnDetalles');
    btnDetailClick.addEventListener('click', () => {
        detalsProductoPropio(actual);
    });

    const carroPrincipal = target.querySelector('.subCarro');
    carroPrincipal.addEventListener('click', () => {
        clickCarro(actual);
    });

    if (catalogo) {
        catalogo.appendChild(target);
    }
}