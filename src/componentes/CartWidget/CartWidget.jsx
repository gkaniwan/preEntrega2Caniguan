

const CartWidget = () => {
  const carrito = "/img/carrito.png"

  return (
    <div>
        <img src={carrito} alt="Imágen del Carrito" width="75" height="75" />
        <strong >9</strong>
    </div>
    
  )
}

export default CartWidget

