import { Link } from "react-router-dom";
import { useCart } from "react-use-cart"

const ItemCard = ({item, handleClick}) => {
    const { addItem } = useCart();

    return ( 
        <div>
            <div className="boxes">
                <img src="https://images.unsplash.com/photo-1656543802898-41c8c46683a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
                <div>
                    <h5 className="card-title">{item.title}</h5>
                    <h5 className="card-price">$ {item.price}</h5>
                    <Link to='/cart'><button className="card-button" onClick={() => addItem(item)}>Add to Cart</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default ItemCard;