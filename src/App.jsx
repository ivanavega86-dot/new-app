import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import ItemDetailConteiner from './components/ItemDetailContainer';
import BotonContador from './components/button';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Error from "./components/Error";
function App() {
  

  return (
    <BrowserRouter>
      <NavBarBS/>
     
      <BotonContador/>
      <Routes>
       <Route path='/' element ={ <ItemListContainer Mensaje = 'Bienvenidos a mi App!'/>}/>
       <Route path='/category/:type' element ={ <ItemListContainer Mensaje = 'Estas en la categoria'/>}/>
       <Route path='/item/:id' element ={<ItemDetailConteiner/>} />
       <Route phat ="*" element = {<Error/>}/>
    </Routes>
     </BrowserRouter>

  )
}

export default App

