const productos = [
    {idItem: 1, nombre: "Cafe En Granos 250Grs", precio: 1000, img: "../public/img/cafe250grs.png", idCategoria: "1"},
    {idItem: 2, nombre: "Cafe En Granos 500Grs", precio: 2000, img: "../public/img/cafe250grs.png", idCategoria: "1"},
    {idItem: 3, nombre: "Cafe En Granos 1Kg", precio: 3500, img: "../public/img/cafe250grs.png", idCategoria: "1"},
    {idItem: 4, nombre: "Cafe Molido 250Grs", precio: 1200, img: "../public/img/cafeMolido.png", idCategoria: "2"},
    {idItem: 5, nombre: "Cafe Molido 500Grs", precio: 2200, img: "../public/img/cafeMolido.png", idCategoria: "2"},
    {idItem: 6, nombre: "Cafetera Italiana", precio: 10000, img: "../public/img/cafeteraItaliana.png", idCategoria: "3"},
    {idItem: 7, nombre: "Cafetera Francesa", precio: 12000, img: "../public/img/cafeteraFrancesa.png", idCategoria: "3"},
    {idItem: 8, nombre: "Cafetera express", precio: 15000, img: "../public/img/cafeteraExpreso.png", idCategoria: "3"},
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.idItem === id);
            resolve(producto);
        }, 200)
    })
}

export const getProductosCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCategoria === idCategoria);
            resolve(productosCategoria);
        }, 200)
    })
}