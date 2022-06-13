//@ts-check
import React from 'react'
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CartWidget( {cantProductos} ) {
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
    <div>{cantProductos}</div>
    </div>
  
    )
}
