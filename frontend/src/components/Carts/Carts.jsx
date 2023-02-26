import React from 'react'
import { Cart } from '../Cart/Cart'
import s from './Carts.module.css'

export const Carts = () => {
    let productos=[1,2,3,4,5,6]
    return (
    <>
        <div className={s.titulo}>
            {/* <h3>Nuestros productos</h3> */}
        </div>
        <section className={s.productoscontainer}>
            {
            productos.map(p=><Cart/>)
            }
        </section>
    </>
  )
}
