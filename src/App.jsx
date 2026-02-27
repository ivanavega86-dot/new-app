import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailConteiner from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Error from "./components/Error";
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
function App() {
  

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBarBS/>
      <Routes>
       <Route path='/' element ={ <ItemListContainer Mensaje = 'Bienvenidos a mi App!'/>}/>
       <Route path='/category/:type' element ={ <ItemListContainer Mensaje = 'Estas en la categoria '/>}/>
       <Route path='/item/:id' element ={<ItemDetailConteiner/>} />
        <Route path='/cart' element ={<CartContainer/>} />
       <Route path ="*" element = {<Error/>}/>
    </Routes>
    </CartProvider>
     </BrowserRouter>

  )
}

export default App

