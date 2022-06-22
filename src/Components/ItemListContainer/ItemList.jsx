
import React from 'react'
import Item from "./Item";
import "./Item.css"


export default function ItemList({productosLista}) {
      
  

  return (
    
    <div className="ItemList">
        {
          productosLista.map((item)=>
            <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureURL={item.pictureURL} />
          )
        }
        
    </div>
  )
}

