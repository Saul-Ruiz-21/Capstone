import { useCart } from "react-use-cart"
import React from "react";
import './Cart.css'


const Cart = (props) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="empty-cart">Your Cart is Empty</h1>
    return ( 
        <div>
            <section className="container-cart">
                <div className="row1">
                    <div className="col-12">
                        <h5>total Items: ({totalItems})</h5>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item) => {
                                    return(
                                        <tr>
                                            <td>
                                                <img src={item.img} style={{height:'6rem'}}/>
                                            </td>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>Quantity ({item.quantity})</td>
                                            <td>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity -1)} className="btn btn-info ms-2">-</button>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity +1)} className="btn btn-info ms-2">+</button>
                                                <button onClick={() => removeItem(item.id)}>Remove Item</button>
                                            </td>
                                        </tr>
                                    )   
                            })}
                            </tbody>
                            
                        </table>
                    </div>

                    <div className="">
                        <h2>Total Price: $ {cartTotal}</h2>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Cart;