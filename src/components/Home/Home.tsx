import React, { useState } from "react";
import "../Home/Home.css";
import burguersData from "../../data/burguersData.json"
import BurguerCard from "../Burguer/Card/BurguerCard";
import { Burguer } from "../../interfaces/Burguer/interfaces";

const Home = () => {

    return (
        <div className="full-container">
            <h1 className="title">MENU</h1>
            <div className="card-container">
                {burguersData.map((burguer) => (
                    <BurguerCard burguer={burguer}/>
                ))}
            </div>
        </div>
    );
}

export default Home;