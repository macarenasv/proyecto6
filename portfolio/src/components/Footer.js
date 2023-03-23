import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p> Santiago, Chile </p>
                           
                        </div>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            macarenasotovaldes@gmail.com
                        </h4>
                    </div>

                </div>

                <div className="right">
<h4> About me </h4>
<p> I am Macarena Soto</p>
<div className="social">
<FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
<FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
</div>


                </div>

            </div>
        </div >
    )
}

export default Footer