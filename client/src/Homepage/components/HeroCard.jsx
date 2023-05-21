import React from 'react'
import './HeroCard.css'
import { BsInstagram ,AiOutlineTwitter, RiEarthFill} from 'react-icons/all'
const HeroCard = ({logo, name , work}) => {
  return (
    <>
        <div class="hero-card">
            <img class="hero-image" src={logo} alt="hero Image" />
            <div class="content">
                <h2>{name}</h2>
                <p>{work}</p>
                <div className="logos">
                    <BsInstagram />
                    <AiOutlineTwitter />
                    <RiEarthFill />
                </div>
            </div>
         </div>
    </>
  )
}

export default HeroCard