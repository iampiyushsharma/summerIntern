import {BsFacebook ,AiFillInstagram,AiFillTwitterCircle,AiFillYoutube,BsGithub} from 'react-icons/all'
import './foter.css'
const Footer = () => {
  return (
    <>
    <div className="whole">
   <div className="first">
    <div className="one">
      <div className="un">Material Tailwind</div>
      <div className="num">Easy to use React components for Tailwind CSS and Material Design.</div >
      <div className="tres"> 
        <div className="little-social">
          <div className="circles"><BsFacebook /></div>
          <div className="circles"><AiFillInstagram /></div>
          <div className="circles"><AiFillTwitterCircle /></div>
          <div className="circles"><AiFillYoutube /></div>
          <div className="circles"><BsGithub /></div>

        </div>
      </div>
    </div>
    <div className="two">
<div className="link"><b>Useful Links</b>

   <ul>
    <li>About Us</li>
    <li>Blog</li>
    <li>Github</li>
    <li>Free Products</li>
   </ul>
</div>
<div className="res"> 
   <b>Other Resources</b>

    <ul>
        <li>MIT License</li>
        <li>Contribute</li>
        <li>Change Log</li>
        <li>Contact Us</li>
    </ul>
</div>
    </div>
    </div>
    <div className="second">Copyright © 2023 Material Tailwind by Creative Tim.</div>
    </div>
    </>
  )
}

export default Footer