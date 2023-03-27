import "./WorkCardStyles.css"
import proylanding from "../assets/proylanding.png"
import proyreact from "../assets/proyreact.png"
import proycrud from "../assets/proycrud.png"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = () => {
    return (
        <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
       
        <div className="project-card">
        <img src={proyreact} alt="react"/>
        <h2 className="project-title">Nori Sushi Project</h2>
        <div className="pro-details">
            <p>Project created for UDD Bootcamp of a sushi restaurant using React.</p>
            <div className="pro-btns">
                <NavLink to="https://proyecto4-457.vercel.app/" className="btn">View</NavLink>
                <NavLink to="https://github.com/macarenasv/proyecto4" className="btn">Source</NavLink>
            </div>
        </div>
    </div>

    <div className="project-card">
        <img src={proylanding} alt="landing"/>
        <h2 className="project-title">Destino Mágico Project</h2>
        <div className="pro-details">
            <p>Project created for UDD Bootcamp of a sales landing for "Destino Mágico" travel agency.</p>
            <div className="pro-btns">
                <NavLink to="https://cute-fenglisu-c61858.netlify.app/" className="btn">View</NavLink>
                <NavLink to="https://github.com/macarenasv/proyecto1" className="btn">Source</NavLink>
            </div>
        </div>
    </div>

    <div className="project-card">
        <img src={proycrud} alt="crud"/>
        <h2 className="project-title">CRUD Project</h2>
        <div className="pro-details">
            <p>Project created for UDD Bootcamp of CRUD app or "Destino Mágico" travel agency.</p>
            <div className="pro-btns">
                <NavLink to="https://63253c215ddea76e2ab614ed--glittering-torrone-bbae85.netlify.app/#" className="btn">View</NavLink>
                <NavLink to="https://github.com/macarenasv/proyecto2" className="btn">Source</NavLink>
            </div>
        </div>
    </div>


        </div>
    </div>
        
    )
}

export default WorkCard