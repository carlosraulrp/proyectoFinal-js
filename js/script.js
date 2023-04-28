
fetch("../JSON/data.json")
    .then(res => res.json())
    .then(productos =>{
        miProyecto(productos)
    })


    function miProyecto(productos){
        let carrito = []

renderizarProducto(productos)
function renderizarProducto (arrayProductos){
    let contenedor = document.getElementById("contenedorProductos")
    let carritoIcon = document.getElementById("carritoIcon")
    let vaciarCarrito = document.getElementById("vaciarCarrito")
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
    lanzarTostify()
    console.log(carrito) 
    renderizarCarrito(carrito)   //parametro carrito porque ya tendra un producto porque lo pusheamos en lineas anteriores
}


} 

function renderizarCarrito(arrayProductos){
    carritoCaja.innerHTML = ""
    arrayProductos.forEach(element=>{
        carritoCaja.innerHTML+= `<img class = "img-fluid" src="${element.img}" /><h3>${element.nombre} ${element.precio}  cantidad ${element.unidades} ${element.subTotal}</h3>`
    })
    if (carrito.length == 0) {
        carritoCaja.innerHTML = `
        <p>Carrito vacio, agrega un producto</p>
        `
    }else{
        console.log("algo")
    } 
    carritoIcon.textContent = carrito.length  
}

//vaciar carrito
vaciarCarrito.addEventListener("click", ()=>{
    carrito.length = []
    renderizarCarrito(carrito)
})

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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'BIENVENIDO A NUESTRA TIENDA',
            showConfirmButton: false,
            timer: 1500
          })
        contenedoraIngreso.classList.add("ocultar")
        contenedorPaginaCompra.classList.remove("ocultar") 

    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            position:'center',
            title: 'Datos ingresados incorrectos',
            showConfirmButton: false,
            timer: 1500
          })
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

    function lanzarTostify(){
        Toastify({
            text: "Producto agregado",
            className: "info",
            position: "center",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
    }

    }





