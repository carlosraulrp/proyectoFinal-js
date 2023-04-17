let articulos =[
    {
        id: 10,
        nombre: "calcetines",
        tipo: "vestimenta",
        deporte: "senderismo",
        genero: "unisex",
        precio: 6000,
        stock: 100,
        img:"https://contents.mediadecathlon.com/p1701392/k$621280fa26d3b67c9b18be99b3420006/calcetines-senderismo-de-nieve-adultos-sh100-cana-media-warm-gris.jpg?format=auto&quality=40&f=200x200"
    },
    {
        id: 11,
        nombre: "mochila",
        tipo: "equipo",
        deporte: "senderismo",
        genero: "unisex",
        precio: 10000,
        stock: 10,
        img:"https://contents.mediadecathlon.com/p1805392/k$57f8fdae1c9c57b5a1e51aadec4f993e/mochila-de-senderismo-nh100-10-litros-burdeo.jpg?format=auto&quality=40&f=200x200"
    },
    {
        id: 12,
        nombre: "short",
        tipo: "vestimenta",
        deporte: "tenis",
        genero: "hombre",
        precio: 12000,
        stock: 8,
        img:"https://contents.mediadecathlon.com/p2454700/k$3044274e5c6f95734aaf630db5f37e18/short-de-tenis-dry-100-blanco-hombre.jpg?format=auto&quality=40&f=452x452"
    },
    {
        id: 13,
        nombre: "balon",
        tipo: "equipo",
        deporte: "futbol",
        genero: "unisex",
        precio: 8000,
        stock: 10,
        img:"https://http2.mlstatic.com/D_NQ_NP_782966-MLA52249028475_112022-O.jpg"
    },
    {
        id: 20,
        nombre: "balon",
        tipo: "equipo",
        deporte: "futbol",
        genero: "unisex",
        precio: 8000,
        stock: 6,
        img:"https://contents.mediadecathlon.com/p2193900/k$91e905b11acd674880d87d3dc45e9ea8/balon-de-futbol-f900-fifa-termosellado-5-blanco.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 14,
        nombre: "botas",
        tipo: "vestimenta",
        deporte: "senderismo",
        genero: "mujer",
        precio: 32000,
        stock: 6,
        img:"https://www.desnivel.com/images/2013/03/x-ultra-mid-gtx-m-green-660x440.jpg"
    },
    {
        id: 15,
        nombre: "pesas",
        tipo: "equipo",
        deporte: "fitness",
        genero: "unisex",
        precio: 40000,
        stock: 5,
        img:"https://falabella.scene7.com/is/image/Falabella/7988504_1?wid=800&hei=800&qlt=70"
    },
    {
        id: 16,
        nombre: "traje de baño",
        tipo: "equipo",
        deporte: "natacion",
        genero: "mujer",
        precio: 14500,
        stock: 10,
        img:"https://samiacl03.akamaized.net/7235-large_default/traje-de-bano-enterito-reductor-azul-marino.jpg"
    },
    {
        id: 17,
        nombre: "calza",
        tipo: "vestimenta",
        deporte: "running",
        genero: "mujer",
        precio: 16000,
        stock: 22,
        img:"https://contents.mediadecathlon.com/p2048989/k$6ba654d91454ac2bcb94c1d720004eac/calzas-termicas-leggins-deportivos-running-kalenji-run-warm-mujer-negro.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 18,
        nombre: "saco",
        tipo: "equipo",
        deporte: "boxeo",
        precio: 65000,
        genero: "unisex",
        stock: 4,
        img:"https://contents.mediadecathlon.com/p2218297/k$f0b5e2288b74f4433d2c81a3de1973db/saco-de-boxeo-pb-850-rojo.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 19,
        nombre: "chaqueta",
        tipo: "vestimenta",
        deporte: "senderismo",
        genero: "mujer",
        precio: 22000,
        stock: 3,
        img:"https://contents.mediadecathlon.com/p1714537/k$e9c3346e90b2394dbf1831f3df5f9449/chaqueta-de-polar-senderismo-mujer-mh520-azul.jpg?format=auto&quality=40&f=800x800"
    },
    {
        id: 21,
        nombre: "pesas",
        tipo: "equipo",
        deporte: "fitness",
        genero: "unisex",
        precio: 39000,
        stock: 5,
        img:"https://http2.mlstatic.com/D_NQ_NP_992797-MLC52285643445_112022-O.webp"
    },
    {
        id: 22,
        nombre:"raqueta",
        tipo: "equipo",
        deporte: "tenis",
        genero: "unisex",
        precio: 45000,
        stock: 3,
        img: "https://falabella.scene7.com/is/image/Falabella/gsc_113917280_818560_1?wid=1500&hei=1500&qlt=70"
    },
    {
        id: 23,
        nombre:"raqueta",
        tipo: "equipo",
        deporte: "tenis",
        genero: "unisex",
        precio: 42000,
        stock: 2,
        img: "https://sparta.cl/media/catalog/product/r/a/raqueta_tenis_head_ig_challenge_pro_amarilla-1_1.png?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
    },
    {
        id: 24,
        nombre: "traje de baño",
        tipo: "equipo",
        deporte: "natacion",
        genero: "mujer",
        precio: 22000,
        stock: 5,
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_715771-CBT54918688677_042023-F.webp"
    }

]

let productos = articulos.map(element =>{
    return new Articulo (element.id, element.nombre, element.tipo, element.deporte, element.genero, element.precio, element.stock, element.img)
})


let carrito = []

renderizarProducto(productos)
function renderizarProducto (arrayProductos){
    let contenedor = document.getElementById("contenedorProductos")
    contenedor.innerHTML = ""
    arrayProductos.forEach(element => {                          //recorro el array que cree como parametro en la funcion
        let cardProducto = document.createElement("div")         //creo el div de la card
        cardProducto.className = "cardProducto"                  //le asigno una clase                  
         //creo el contenido de la card                                                
        cardProducto.innerHTML += `                              
        <img src = ${element.img}>
        <h3>${element.nombre.toUpperCase()}</h3>
        <p> Deporte: ${element.deporte}<p/>
        <p> Quedan: ${element.stock} Unidades<p/>
        <h3>PRECIO: ${element.precio}</h3>
        <button id=${element.id} type="button" class="btn btn-primary">AGREGAR AL CARRITO</button>
        
        `
        contenedor.append(cardProducto) // al padre contenedor agregale el hijo card
        //configuramos boton para agregar al carrito identificandolo con id
    let boton = document.getElementById(element.id)
    boton.addEventListener("click", agregarAlCarrito)
    })
}


function agregarAlCarrito(e){            /* con la e lo que decimos es quiero saber quien lanzo el evento */
console.log(e.target.id)
let productoBuscado = productos.find(element => element.id === Number(e.target.id ))//busco que el nodo del evento == que el objeto original
if (carrito.some(element => element.id === productoBuscado.id)) {
    let index = carrito.findIndex(element => element.id === productoBuscado.id)
    carrito[index].unidades++
    carrito[index].subTotal = carrito[index].unidades * carrito[index].precio
    
    renderizarCarrito(carrito)
}else{
    productoBuscado.unidades = 1
    productoBuscado.subTotal= productoBuscado.precio 
    carrito.push(productoBuscado)   //agrego producto buscado al carrito
    console.log(carrito) 
    renderizarCarrito(carrito)   //parametro carrito porque ya tendra un producto porque lo pusheamos en lineas anteriores
}

} 

function renderizarCarrito(arrayProductos){
    carritoCaja.innerHTML = ""
    arrayProductos.forEach(element=>{
        carritoCaja.innerHTML+= `<h3>${element.nombre} ${element.precio}  cantidad ${element.unidades} ${element.subTotal}</h3>`
    })
}

//configuramos la barra del buscador
let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrar)
function filtrar(){
    
    let arrayFiltradoBuscador = productos.filter(element => element.nombre.includes(buscador.value.toLowerCase())|| element.deporte.includes(buscador.value.toLowerCase()))
    renderizarProducto(arrayFiltradoBuscador)
    console.log(buscador.value) 
}


//filter para la navbar
let allCategorias = document.getElementById("allCategorias")
let padreCategorias = document.getElementById("padreCategorias")
padreCategorias.addEventListener("click", filtrarCategoria)
function filtrarCategoria(e){
let arrayCategorias = productos.filter(element => element.deporte == e.target.id)
renderizarProducto(arrayCategorias)

}







/* let senderismo = document.getElementById("senderismo")
senderismo.addEventListener("click",filtrarSenderismo)
function filtrarSenderismo(){
    let arraySenderismo = productos.filter(element => element.deporte == "senderismo")
    renderizarProducto(arraySenderismo)
    console.log(arraySenderismo)
}

let natacion = document.getElementById("natacion")
natacion.addEventListener("click",filtrarNatacion)
function filtrarNatacion(){
    let arrayNatacion = productos.filter(element => element.deporte == "natacion")
    renderizarProducto(arrayNatacion)
    console.log(arrayNatacion)
}

let fitness = document.getElementById("fitness")
fitness.addEventListener("click",filtrarFitness)
function filtrarFitness(){
    let arrayFitness = productos.filter(element => element.deporte == "fitness")
    renderizarProducto(arrayFitness)
    console.log(arrayFitness)
} 

let tenis = document.getElementById("tenis")
tenis.addEventListener("click", filtrarCategoria) */



let contenedoraIngreso = document.getElementById("cajaIngreso")
let contenedorPaginaCompra = document.getElementById("mostrarPagina")
//registro
let usuario = document.getElementById("inputNombre")
let clave = document.getElementById("inputClave")
let registro = document.getElementById("botonRegistro")
registro.addEventListener("click", () =>{
    console.log(usuario.value)
    console.log(clave.value)
    let infoUsuario = {
        usuario: usuario.value,
        clave: clave.value
    }
    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
})


//login
let usuarioLg = document.getElementById("inputNombreLg")
let claveLg = document.getElementById("inputClaveLg")
let botonIngresar = document.getElementById("botonLogin")

botonIngresar.addEventListener("click", () =>{
    let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
    if (infoUsuario.usuario == usuarioLg.value && infoUsuario.clave == claveLg.value) {
        alert("Bienvenido, puede ver nuestros productos")
        contenedoraIngreso.classList.add("ocultar")
        contenedorPaginaCompra.classList.remove("ocultar") 

    } else {
        alert("Datos ingresados incorrectos")
    }
})


//ver carrito

let verCarrito = document.getElementById("verCarrito")
let carritoCaja = document.getElementById("carritoCaja")
let padreCajaProductos = document.getElementById("padreCajaProductos")
let seguirComprando = document.getElementById("SeguirComprando")
let seguirComprandoBoton = document.getElementById("seguirComprandoBoton")
verCarrito.addEventListener("click",()=>{
    console.log("se ejecuta este click")
    carritoCaja.classList.remove("ocultar")
    padreCajaProductos.classList.add("ocultar")
    seguirComprando.classList.remove("ocultar") 
    })

    seguirComprandoBoton.addEventListener("click", () =>{
        carritoCaja.classList.add("ocultar")
        padreCajaProductos.classList.remove("ocultar")
        seguirComprando.classList.add("ocultar")
    })





