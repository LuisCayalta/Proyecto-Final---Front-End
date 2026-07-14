export const temas = [
    { 
        id: '1',
        nombre: '1. Claro Minimal',
        colores: {
            fondo: '#ffffff',           
            fondoSecundario: '#f8fafc', 
            texto: '#0f172a',           
            textoSecundario: '#475569'  
        }
    }, 
    { 
        id: '2',
        nombre: '2. Oscuro Nocturno',
        colores: {
            fondo: '#121212',           
            fondoSecundario: '#1e1e1e', 
            texto: '#ffffff',           
            textoSecundario: '#a3a3a3'  
        }
    }, 
    { 
        id: '3',
        nombre: '3. Drácula/Cyber',
        colores: {
            fondo: '#0f172a',           
            fondoSecundario: '#1e293b', 
            texto: '#f8fafc',           
            textoSecundario: '#94a3b8'  
        }
    }, 
    { 
        id: '4',
        nombre: '4. Atardecer Cálido',
        colores: {
            fondo: '#fefefe',           
            fondoSecundario: '#fff7ed', 
            texto: '#1e293b',           
            textoSecundario: '#ea580c'  
        }
    }, 
    { 
        id: '5',
        nombre: '5. Industrial Gris',
        colores: {
            fondo: '#e5e7eb',           
            fondoSecundario: '#f3f4f6', 
            texto: '#111827',           
            textoSecundario: '#4b5563'  
        }
    }, 
    { 
        id: '6',
        nombre: '6. Gamer Nitro',
        colores: {
            fondo: '#0a0a0a',           
            fondoSecundario: '#1a1a1a', 
            texto: '#ffffff',           
            textoSecundario: '#dc2626'  
        }
    }
];

export const productosProp = [
    {
        id: 1,
        nombre: "RTX 2080 ROG STRIX",
        descripcion: "Una gpu de alta potencia de la segunda generacion de las rtx. de la linea rog strix de asus para la mejor calidad.",
        precio: 260000,
        img: "2080rog.jpg",
        video: "video.mp4",    
        marca: "ASUS",
        linea: "ROG Strix",
        Fecha: "19 de Septiembre - 2018",
        Estado: "Usado - como nuevo",
        categoria: "placasVideo",
        estrellas: 4.8,
        votaciones: 154
    },
    {
        id: 2,
        nombre: "B450M PRIME-A",
        descripcion: "Una de las mejores placas calidad precio para la plataforma am4, con soporte hasta ryzen de 5ta generacion.",
        precio: 110000,
        img: "b450m.jpg",
        video: "b450m.mp4",
        marca: "ASUS",
        linea: "PRIME",
        Fecha: "31 de Julio - 2018",
        Estado: "Nuevo",
        categoria: "placasMadres",
        estrellas: 4.5,
        votaciones: 85
    },
    {
        id: 3,
        nombre: "Z390 Phantom Gaming",
        descripcion: "Placa madre diseñada para la plataforma Intel de la 8va a 9na generacion, con buen suministro de VRMs, ideal para overclocks modestos.",
        precio: 90000,
        img: "z390.jpg",
        video: "z390.mp4",
        marca: "ASRock",
        linea: "Phantom Gaming",
        Fecha: "08 de Octubre - 2018",
        Estado: "Usado - excelente estado",
        categoria: "placasMadres",
        estrellas: 4.2,
        votaciones: 62
    },
    {
        id: 4,
        nombre: "Ryzen 7 5700G",
        descripcion: "Uno de los mejores procesadores de la plataforma am4, contando con 8 nucleos, 16 hilos y con unos graficos integrados ideal para gaming en general.",
        precio: 190000,
        img: "5700g.jpg",
        video: "ry7.mp4",
        marca: "AMD",
        linea: "Ryzen 7",
        Fecha: "13 de Abril - 2021",
        Estado: "Usado - como nuevo",
        categoria: "Procesadores",
        estrellas: 4.7,
        votaciones: 240
    }
];

export const clavesPrincipal = [
    {nombreNav: "V&Tech", linkNav: ""},
    {nombreNav: "inicio", linkNav: "#principio"},
    {nombreNav: "Productos", linkNav: "./Estructura html/productos.html"},
    {nombreNav: "Contacto", linkNav: "./Estructura html/contacto.html"},
    {nombreNav: "Carrito", linkNav: "./Estructura html/carro.html"},
    {nombreNav: "menu", linkNav: "#menu"}
]

export const clavesProductos = [
    {nombreNav: "V&Tech", linkNav: "", id: ""},
    {nombreNav: "inicio", linkNav: "../index.html", id:""},
    {nombreNav: "Productos", linkNav: "#productContent", id: ""},
    {nombreNav: "Contacto", linkNav: "../Estructura html/contacto.html", id: ""},
    {nombreNav: "Carrito = 0", linkNav: "../Estructura html/carro.html", id: "elCarro"}
]

export const clavesCarrito = [
    {nombreNav: "V&Tech", linkNav: ""},
    {nombreNav: "inicio", linkNav: "#principio"},
    {nombreNav: "Productos", linkNav: "#productCatalogo"},
    {nombreNav: "Contacto", linkNav: "#contactoLink"},
    {nombreNav: "Carrito", linkNav: "#pestañaCarro"}
]

export const clavesContacto = [
    {nombreNav: "inicio", linkNav: "../index.html"},
    {nombreNav: "Productos", linkNav: "../Estructura html/productos.html"},
    {nombreNav: "Carrito", linkNav: "../Estructura html/carro.html"}
]

export const resenias = [
    {
        nombreUser: "Tomas_Tuf99", 
        mensajeUser: "Compré el Ryzen 7 5700X y llegó al toque a Malvinas. Una masa cómo vuela en los Soulslike, 100% recomendados."
    },
    {
        nombreUser: "Eli_Hardware", 
        mensajeUser: "Excelente atención técnica. Me asesoraron de diez con la compatibilidad de la motherboard B450M y la fuente. Volveré a comprar."
    },
    {
        nombreUser: "Franco_Radeon", 
        mensajeUser: "Cazando ofertas encontré esta tienda. La placa de video llegó impecable, re bien embalada y rindiendo al 100% en benchmarks."
    },
    {
        nombreUser: "Martina_Gamer", 
        mensajeUser: "Tenía dudas con el Dual Channel de las RAM y los chicos me explicaron todo con la mejor paciencia. Unos capos totales."
    },
    {
        nombreUser: "Nico_Souls", 
        mensajeUser: "Armé mi primer PC gamer con ellos. Precios imbatibles y los componentes son una locura. Corriendo el Elden Ring en ultra."
    },
    {
        nombreUser: "Chainsaw_Builds", 
        mensajeUser: "El envío por Zona Norte fue rapidísimo. El producto vino sellado de fábrica y con la garantía al día. Muy confiables."
    },
    {
        nombreUser: "Gamer99", 
        mensajeUser: "Una vergüenza la verdad. Compré una gráfica que vino con artifacting de fábrica y llevo dos semanas esperando que el servicio técnico me valide la garantía. Se toman todo el tiempo del mundo."
    },
    {
        nombreUser: "Lucas_Lag", 
        mensajeUser: "El producto llegó bien, pero la caja venía re golpeada por el correo. Les mandé un mensaje para reclamar por el empaque y tardaron tres días en contestarme. Tienen que mejorar la atención postventa urgente."
    }
];

export const categorias = [
    {nombre: 'Placas madres',categoria: 'placasMadres'},
    {nombre: 'Placas de video',categoria: 'placasVideo'},
    {nombre: 'Monitores',categoria: 'Monitors'},
    {nombre: 'Discos',categoria: 'Almacenamiento'},
    {nombre: 'Procesadores',categoria: 'Procesadores'},
]

export const datosFaltantesAPI = [
    {
        id: 5,
        marca: "Western Digital",
        linea: "Elements Portable",
        Estado: "Nuevo",
        Fecha: "2020",
        descripcion: "Disco rígido externo portátil de 2TB de capacidad con conexión USB 3.0 ultra rápida. Excelente rendimiento para llevar tus archivos a donde quieras con total seguridad."
    },
    {
        id: 6,
        marca: "SanDisk",
        linea: "SSD PLUS",
        Estado: "Nuevo",
        Fecha: "2019",
        descripcion: "Disco de estado sólido (SSD) interno de 1TB de capacidad con interfaz SATA III. Ideal para revivir tu PC o notebook con velocidades de inicio, carga y transferencia brutales."
    },
    {
        id: 7,
        marca: "Silicon Power",
        linea: "A55",
        Estado: "Nuevo",
        Fecha: "2021",
        descripcion: "SSD de 256GB SATA III con tecnología de caché SLC de alta velocidad. Una opción súper económica y sumamente confiable para acelerar tu sistema operativo y tus programas diarios."
    },
    {
        id: 8,
        marca: "Western Digital",
        linea: "Gaming Drive PS4",
        Estado: "Usado - excelente estado",
        Fecha: "2020",
        descripcion: "Disco rígido externo de 4TB optimizado para consolas PlayStation 4 y PlayStation 5. Olvidate de desinstalar juegos gracias a su enorme almacenamiento dedicado y de alta durabilidad."
    },
    {
        id: 9,
        marca: "Acer",
        linea: "SB220Q",
        Estado: "Nuevo",
        Fecha: "2018",
        descripcion: "Monitor IPS ultra delgado de 21.5 pulgadas con resolución Full HD (1920x1080). Excelente fidelidad de color, ángulos de visión amplios y diseño de bordes mínimos ideal para setup multimonitor."
    },
    {
        id: 10,
        marca: "Samsung",
        linea: "CHG90",
        Estado: "Usado - como nuevo",
        Fecha: "2017",
        descripcion: "Imponente monitor gaming curvo ultra-wide de 49 pulgadas con panel QLED, tasa de refresco de 144Hz y soporte HDR. La experiencia definitiva para multitarea extrema y una inmersión absoluta en gaming."
    }
];

export const entradasForm = [
    {etiqueta: 'input', id: 'inputNombre', clase: 'formEntrada', mensajePlace: 'Tu nombre'},
    {etiqueta: 'input', id: 'inputEmail', clase: 'formEntrada', mensajePlace: 'Example@gmail.com'},
    {etiqueta: 'textarea', id: 'textMesage', clase: 'formEntrada', mensajePlace: 'Escribe aqui tus dudas'},
    {etiqueta: 'button', id: 'btnForm', clase: 'formEntrada'}
]