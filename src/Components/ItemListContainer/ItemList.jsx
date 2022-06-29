
import React from 'react'
import Item from "./Item";
import "./Item.css"


export default function ItemList({productosLista}) {
      
  

  return (
    
    <div className="ItemList">
        {
          productosLista.map((item)=>
            <Item key={item.id} {...item} />
          )
        }
        
    </div>
  )
}

