import React from 'react'
import './Card.css'







const Card = ({logo, title , details, goto}) => {
  
  function handleClick() {
    window.location.href =goto;
  }
  
  return (
    <>
        <div class="card" onClick={handleClick}>
            <img class="card-image" src={logo} alt="Card Image" />
            <div class="card-content">
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
         </div>
    </>
    
  )
}

export default Card