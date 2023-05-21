import React from 'react'
import "./Heroes.css"
import h1 from './Images/h1.jpeg'
import h2 from './Images/h2.jpeg'
import h3 from './Images/h3.jpeg'
import h4 from './Images/h4.jpeg'

import HeroCard from './HeroCard'
const Heroes = () => {
  return (
       <>
          <div className="heroes">
            <div className="heroes-content">
            <div className="upper">Here are our heroes</div>
            <div className="lower">According to the National Oceanic and Atmospheric Administration, 
            Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</div>
            </div>
            <div className="heroes-image">
                
            <HeroCard 
              logo={h1}
              name='Piyush'
              work='something'
            />
            <HeroCard 
              logo={h2}
              name='piyush'
              work='something'
            />
            <HeroCard 
              logo={h3}
              name='piyush'
              work='something'
            />
            <HeroCard 
              logo={h4}
              name='piyush'
              work='something'
            />
            </div>
          </div>
       </>
  )
}

export default Heroes