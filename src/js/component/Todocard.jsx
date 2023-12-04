import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Todocard = ({uid, name, imglink}) => {
	const { store, actions } = useContext(Context);

    const errorHandler = (event) => {
        event.target.source = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
    }

    return (
        <div>
            <div className="card" style={{width: "17rem",}} key={uid} id={uid}>
                    <img src={imglink + uid +'.jpg'} className="card-img-top" onError={errorHandler()} alt="..."/>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                </div>
            </div>
        </div>
    )
};
