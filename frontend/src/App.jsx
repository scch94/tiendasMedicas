import { useDispatch, useSelector } from 'react-redux';
import { useEffect, } from 'react';
import './App.css';
import * as actions from './redux/actions/index'

function App() {
  let dispatch=useDispatch();
  let productos=useSelector(state=>state.productos)
  useEffect(()=>{
    dispatch(actions.obtenerProductos());
  },[dispatch])
  return (
    <div className="App">
        <h1>{productos[0].nombre}</h1>
        <img src="https://m.media-amazon.com/images/I/617uF-Zq3oL.jpg" alt={productos[0].img} />
    </div>
  );
}

export default App;
