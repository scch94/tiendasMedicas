import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Cart } from '../Cart/Cart'
import s from './Carts.module.css'

export const Carts = () => {
    let pro=useSelector(state=>state.productos)
    let [productos,setProductos]=useState([...pro])
    console.log(productos)
    return (
    <>
        <div className={s.titulo}>
            {/* <h3>Nuestros productos</h3> */}
        </div>
        <section className={s.productoscontainer}>
            {
            productos.map(p=><Cart 
                key={p.id} 
                nombre={p.nombre}
                img={p.img}
                />)
            }
        </section>
    </>
  )
}
