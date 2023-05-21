import React from 'react'
import "./TopPart.css"
import { Link } from "react-router-dom";

import Card from './Card';
import fun from './Images/Fun.jpeg'
import doubt from './Images/doubt.jpeg'
import management from './Images/management.jpeg'
import './Card.css'

const TopPart = () => {
  return (
    <>
    <div className='img'>

    </div>
    <div className="bg">

      <div className = "header">

        <Link to='/' style={{ textDecoration: 'none', color:'white' }}>WORKFLOWww</Link>

        <div className="nav">
        <Link to='/videocall' style={{ textDecoration: 'none', color:'white' }}>Profile</Link>
        <Link to='/fun' style={{ textDecoration: 'none' , color:'white'}} >Fun</Link>
        </div>

      </div>

      <div className="body">
        <h1>
        Your story starts with us.
        </h1>

        <p>
          This is a simple example of a Landing Page you can build using Material Tailwind. 
          It features multiple components based on the Tailwind CSS and Material Design by Google.
        </p>
      </div>
    </div>

    <div className="containers">
      <div className="card-div">
        <Card 
          title='Management'
          details='Make your all work here'
          logo={management}
          goto='/management'
        />
        <Card 
          title='Discuss'
          details='Connect with others and clear your mind'
          logo={doubt}
          goto='/discuss'
        />
        <Card 
          title='Fun'
          details='Meeting others can be fun with creativity'
          logo={fun}
          goto='/fun'
        />
      </div>  
    </div>
   </> 
   
   )
}

export default TopPart;
