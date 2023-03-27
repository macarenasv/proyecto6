import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

import { BiCodeCurly } from "react-icons/bi"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h3>Who Am I?</h3>
            <p> Hi, I'm Macarena, a full stack developer who used to work as a lawyer. My background in law has given me a unique perspective on problem-solving and finding creative solutions. I thrive on challenges and am constantly looking for ways to think outside the box. I am constantly learning and expanding my knowledge to stay at the forefront of the latest technologies and trends. </p>
            <h3>Here are a few technologies I’ve been working with recently:</h3>
            <div className="prog">
            <p> MongooseDB</p> 
            <span> <BiCodeCurly size={30} style={{ color: "#fff", marginRight: "2rem" }}/> </span>
            <p> MongoDB</p>
            <span> <BiCodeCurly size={30} style={{ color: "#fff", marginRight: "2rem" }}/> </span>
            <p> Express</p>
            <span> <BiCodeCurly size={30} style={{ color: "#fff", marginRight: "2rem" }}/> </span>
            <p> React</p>
            <span> <BiCodeCurly size={30} style={{ color: "#fff", marginRight: "2rem" }}/> </span>
            <p> Node</p>
            <span> <BiCodeCurly size={30} style={{ color: "#fff", marginRight: "2rem" }}/> </span>
            <p> JavaScript</p>
            </div>

            <div className="right">
                <div className="text-container">
                <div className="top">
                <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
                </div>
                <div className="bottom">

                
                       
                        {/* <BiCodeCurly size={30} style={{ color: "#fff", marginRight: "2rem" }}/> */}
                    
                           
                </div>
                </div>
            </div>
        </div>
        

</div>
  )
}

export default AboutContent