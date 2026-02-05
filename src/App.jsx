import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import BotonContador from './components/button';
function App() {
  

  return (
    <>
      <NavBarBS/>
      <ItemListContainer Mensaje = 'Bienvenidos a mi App!'/>
      <BotonContador/>
       
    
     </>

  )
}

export default App

