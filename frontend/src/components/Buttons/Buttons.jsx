import React, {useState} from "react";
import './Buttons.css'


const Buttons = (props) => {
    const [infoModal, setInfoModal] = useState(false)

    const toggleModal = () => {
        setInfoModal(!infoModal)
    }

    if(infoModal) {
        document.body.classList.add('active-modal')
    }else {
        document.body.classList.remove('active-modal')
    }
    
    return ( 
        <div>
            <div className="info">
               <h4 onClick={toggleModal}>CLICK FOR MORE INFO ON PACKAGES</h4> 
            </div>

            {infoModal && (
            <div className="info-modal">
                <div className="info-overlay"></div>
                <div className="info-content">
                    <h3>Our mission is to help dog owners <br /> find toys and treats that are suitable <br /> for their dog depending on weight <br /> and age. Each box contains toys <br /> and treats of varying toughness for <br /> small to big dogs. Not only do <br /> we take weight into consideration, we also <br /> consider your dogs age as well as if it <br /> has dental issues. Overall your dog <br /> or dogs are sure to love every product delivered <br /> right to your home!! </h3>
                    <p className="closeInfo-modal" onClick={toggleModal}>X</p>
                </div>
            </div>)}

        </div>
     );
}
 
export default Buttons;