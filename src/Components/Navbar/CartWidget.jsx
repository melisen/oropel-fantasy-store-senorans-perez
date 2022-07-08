//@ts-check
import React from 'react'
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//import { useContext } from 'react';
//import { MyCartContext } from "../../Context/CartContext";


export default function CartWidget() {

  //const {cart} = useContext(MyCartContext);

 let carritoHardcore=[
  {
    id:1,
    cantidad:2
  },
  {
    id:2,
    cantidad:4
  }
 ];
   let cantItemsWidget = carritoHardcore.reduce((acc, element)=> acc + element.cantidad, 0)
  
  
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
    <div> {cantItemsWidget>0 &&  <p> {cantItemsWidget} </p>}  </div>
    </div>
  
    )
}
