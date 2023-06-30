import { Link } from 'react-router-dom'

const ItemDetail = ({idItem, nombre, precio, img}) => {
  return (
   <div>
         <div className="row">
        <div className="col-md-4">
        <div className="card">
            <img src={img} className="card-img-top" alt={nombre} />
            <div className="card-body">
            <h5 className="card-title">Nombre: {nombre}</h5>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">ID: {idItem}</p>
            <Link className="btn btn-primary" to={`/item/${idItem}`}> Ver Detalles </Link>
            </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default ItemDetail