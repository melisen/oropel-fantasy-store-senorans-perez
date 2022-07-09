//@ts-check
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { MyCartContext } from "../../Context/CartContext";


export default function CartWidget() {

  const {cantItems} = useContext(MyCartContext);
  const [cantCartWidget, setCantCartWidget] = useState(0);
  useEffect(()=>{
    setCantCartWidget(cantItems)
  }, [cantItems])


  
  return (
  <div className="cartWidget">
    <AddShoppingCartIcon />
    <div className={cantCartWidget===0 ? 'NoSeVe' : 'SeVe' }> <p> {cantCartWidget}  </p> </div>


    </div>
    )
}
