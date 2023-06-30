import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categorias/:idCategoria" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            {/* <Route path="*" element={<h2>Sitio en Construcción</h2>}/> */}
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


