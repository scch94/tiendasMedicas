import axios from 'axios';


export const obtenerProductos=()=>dispatch=>{
    return(
        axios.get('http://localhost:1994/productos')
        .then(response=>response.data)
        .then(respuesta=>dispatch({type:'GET_PRODUCTOS',payload:respuesta.productos}))
    )
}