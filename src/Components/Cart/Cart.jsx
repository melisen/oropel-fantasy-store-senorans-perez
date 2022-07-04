import React from 'react'
import { useContext } from 'react';
import { MyCartContext } from '../Cart/CartContext';

export default function Cart() {

    const {cart} = useContext(MyCartContext);

  return (
    <div>Cart  {cart}</div>
  )
}

