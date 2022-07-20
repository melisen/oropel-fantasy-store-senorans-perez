
import React from 'react'
import Item from "./Item";
import "./Item.css"


export default function ItemList({productosLista}) {
      
  

  return (
    
    <div className="ItemList" style={{marginBottom:'100px'}}>
        {
          productosLista.map((item)=>
            <Item key={item.id} {...item} />
          )
        }
        
    </div>
  )
}

