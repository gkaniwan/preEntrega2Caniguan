import { useState, useEffect } from "react"

const Contador = ({stock, inicial}) => {

    const [contador, setContador] = useState(inicial);

    useEffect( () => {
        document.title = `Contador: ${contador}`
    }, [contador])

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <div>
        <h2 className="card-title">Contador</h2>
        <button onClick={ disminuirContador } type="button" className="btn btn-light"> - </button>
        <strong> {contador} </strong>
        <button onClick={ aumentarContador } type="button" className="btn btn-light"> + </button>

        <button type="button" className="btn btn-light"> Agregar al Carrito </button>
    </div>
  )

}

export default Contador