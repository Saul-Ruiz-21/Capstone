import Cart from "../../components/Cart/Cart";
import { CartProvider } from "react-use-cart";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import './CartPage.css'

const CartPage = (props) => {

    return ( 
        <div className="cart-page-itms">
            <CartProvider>
                <Cart />
                <ItemContainer/>
            </CartProvider>
            
            <div>          
                <body>
                    <div class="sign">
                        <span class="fast-flicker">SUB</span>SCRI<span class="flicker">P</span>TIONS
                    </div>
                </body>

                <div className="sub-dog">
                    <img src="https://images.unsplash.com/photo-1551730459-81d1f86e792f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <h1>Reviews: </h1>
                </div>
            </div>
        </div>
        
     );
}
 
export default CartPage;