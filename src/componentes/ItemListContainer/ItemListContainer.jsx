import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosCategoria} from "../../asyncmock"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ props }) => {

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosCategoria : getProductos;
    
    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <>
        <h2 className="text-center"> Productos </h2>
        <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer