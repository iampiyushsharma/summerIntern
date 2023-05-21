import React from 'react'
import './MiddlePart.css'
import logo from './Images/iiitv.jpeg'
import {FaUserFriends} from 'react-icons/fa'
import Card from './Card'
const MiddlePart = () => {
  return (
    <>
        <div className="container">
        <div className="left">
            <div className='title' >
                <FaUserFriends />
                <h1>Working with us is a pleasure</h1>
                <p>Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.
                The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.</p>
            </div>
        </div>
        <div className="right">
            <Card 
            logo = {logo} 
            title="IIITV" 
            details="Indian Institute of Information Technology Vadodara"
            goto='/fun'
            />
        </div>
    </div>
    </>
    
    
 
    
  )
}

export default MiddlePart