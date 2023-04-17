class Articulo{
    constructor(id, nombre, tipo, deporte, genero, precio, stock, img){
        this.id = id
        this.nombre = nombre
        this.tipo = tipo
        this.deporte = deporte
        this.genero = genero
        this.precio = precio
        this.stock = stock
        this.img = img
    }
    descripArticulo(){
        return this.nombre + " " + this.deporte +" "+ this.genero
    }
}

