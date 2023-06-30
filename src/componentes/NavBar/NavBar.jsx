import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  const logo = "/public/img/images.png"

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
              <img src={ logo } alt="Imágen del Logo" width="75" height="75" />
              {/* <h3>Tienda de Cafe</h3>  */}
          </Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={`/categorias/2`}>Cafe Molido</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/categorias/3`}>Accesorios</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to={"/Carrito"}>Carrito</NavLink>
            </li> */}
          </ul>
        </div>
        <CartWidget/>
      </div>

    </nav>   

  )
}

export default NavBar
