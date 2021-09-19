
import React from 'react';
import "../../App.css";
import "../../Home.css";
import { Button } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom';



function home() {
    return (

        <div class="container"> <h1> Studying shouldn't be</h1>
            <div class="word w1">Complicated.</div>
            <div class="word w2">Stressfull.</div>
            <div class="word w3">Isolating.</div>
            <div class="word w4">Difficult.</div>
            <div class="word w5">Boring.</div>

            <p>
                Emegle allows you to find a study buddy based on<br></br> a matchmaking algorithm that compares your studies of<br></br> interest to online users. Find your selected community.
            </p>
            <Link to = "/faq">     
     <Button className = "howitworksbutton" size = "massive" color='blue'> How It Works</Button>
      </Link > 
            
         
              <img src = "istockphoto-1209904658-612x612-removebg-preview.png"></img>

              <h2>50,000+ Users Online</h2>
              <div className = "img"> 
              <Link to = "/connect">     
      <Button className = "joinbutton" size="massive" color='orange'> Join Now</Button>
      </Link > 
              
             </div>
            </div>

           



    );
}

export default home;