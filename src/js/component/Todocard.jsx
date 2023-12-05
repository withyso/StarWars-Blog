import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Todocard = ({uid, name, imglink}) => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();


    return (
        <div>
            <div className="card bg-dark text-light" style={{width: "17rem",}} key={uid} id={uid}>
                    <img src={imglink + uid +'.jpg'} onError={(event) => {
                        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                    }} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                </div>
            </div>
        </div>
    )
};
