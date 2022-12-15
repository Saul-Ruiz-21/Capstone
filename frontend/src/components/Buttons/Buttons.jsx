import React, {useState} from "react";
import './Buttons.css'


const Buttons = ({items}) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    
    return ( 
        <div>
            <div className="info">
               <h4>CLICK FOR MORE INFO ON PACKAGES</h4> 
            </div>
            <div className="info-modal">
                <div className="info-overlay"></div>
                <div className="info-content">
                    
                </div>
            </div>
                
            <div>
                <button className="add1" >ADD TO CART</button>
                <button className="add2" >ADD TO CART</button>
                <button className="add3" >ADD TO CART</button>
            </div>
        </div>
     );
}
 
export default Buttons;