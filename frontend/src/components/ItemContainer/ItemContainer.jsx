import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";


const ItemContainer = (props) => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    const handleClick = (item) =>{
        cart.push(item)
        console.log(cart)
    };

    async function getProducts(){
        let response = await axios.get(`http://127.0.0.1:8000/api/product/`)
        console.log(response)
        setItems(response.data)
    }
    
      useEffect(() => {
        getProducts();
      }, [])


    return ( 
        <div>
            {items.map(item => 
                <ItemCard key={item.id} item={item} handleClick={handleClick}/>)
            }
        </div>
     );
}
 
export default ItemContainer;