import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useEffect, } from 'react';
import './App.css';
import * as actions from './redux/actions/index'
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/Cart/Cart';
import Car from './components/Car/car';

function App() {
  let dispatch=useDispatch();
  // let productos=useSelector(state=>state.productos)
  useEffect(()=>{
    dispatch(actions.obtenerProductos());
  },[dispatch])
  return (
    <>
      <Routes>
        <Route exact path ='/' element={[<Home/>]}/>
        <Route exact path='/productos' element={[<Navbar/>,<Cart/>,<Car/>]}/>
      </Routes>
    </>
  );
}

export default App;
