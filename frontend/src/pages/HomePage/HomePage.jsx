import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import './HomePage.css'

const HomePage = (props) => {



  return (
    <div>
        <button className="SurveyButton">Take Survey</button>
        <img className="tdog" src='https://images.unsplash.com/photo-1501693121490-de6de2016976?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="" />
        <h1 className="inImj">Enjoy treats and toys <br /> Every Month. </h1>
        <body>
          <div className="midContent">
            <div>
              <img className="bdog" src="https://images.unsplash.com/photo-1616095818012-c386cf5a4c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80" alt="" />
              <h1 className="HIW">HOW IT WORKS</h1>
            </div>
            
            <div className="midText">
              <h2>Join KChews <br /> <p> Join KChews and choose from <br/> the three high quality boxes <br/> of chew toys and treats that <br/> vary in toughness to accomodate your <br/> dog or dogs!!! </p> </h2>
              <h2>We Ship To You <br/> <p>We begin processing on the <br/> first of every month. As <br /> soon as your box ships, you will recieve <br /> a tracking link via email. </p> </h2>
              <h2>Enjoy!! <br /> <p>Enjoy your new toys and <br /> treats with your dog or dogs!!!</p> </h2>
            </div>

          </div>
        </body>

        <body>
          <div className="endContent">
            <div className="boxes">
              <img src="https://images.unsplash.com/photo-1656543802898-41c8c46683a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1656543802898-41c8c46683a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1656543802898-41c8c46683a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
            </div>

            <div className="Packages">
              <h3>Small Dog Package <br /> $20.99 </h3>
              <h3>Medium Dog Package <br /> $35.99 </h3>
              <h3>Large Dog Package <br /> $50.99 </h3>
            </div>

            <div className="Prices">
              
              <h2></h2>
              <h2></h2>
            </div>

          </div>
        </body>
    </div>
  )
};

export default HomePage;
