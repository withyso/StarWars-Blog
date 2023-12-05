import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Todocard } from "../component/Todocard.jsx";
import { useNavigate } from "react-router-dom";

export const InfoStarships = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const [starships, setStarships] = useState({});
    const [data, setData] = useState({});

    const handleInfoStarships = async (params, changestate) => {
        const starshipData = await actions.getData(`https://www.swapi.tech/api/starships/${params}`)
        changestate(starshipData.result);
    }

    useEffect(() => {
		handleInfoStarships(params.starid, setStarships);
	}, [])

    useEffect(() => {
        setData(starships.properties)
        console.log("aqui characters", starships.properties)
	}, [starships,data])



    return(
        <div className="container">
                <div className="next-previous-buttons">
                    <button className="btn btn-outline-warning next-page text-light" onClick={() =>{
                        console.log("me hiciste click")
                        navigate('/')
                    }}>
                        Home
                    </button>
                    <button className="btn btn-outline-warning next-page text-light" onClick={() =>{
                        console.log("me hiciste click")
                        navigate('/prestarships')
                    }}>
                        Starships
                    </button>
                </div>
                <div className="Container-fluid Box">
                    <div className="container-fluid character-box">
                            <img src={store.STARSHIPS_IMAGE + params.starid + '.jpg'} className="card-img-top" alt="..." style={{ width:"20rem"}}/>
                        <div className="name-description">
                            <h2 className="text-warning fs-2 main-text">
                               {starships.properties?.name}
                            </h2>
                            <p className="text-light text-center bg-dark rounded-3 p-1 fw-bolder description">
                                "
                                {
                                    starships.description
                                }
                                "
                            </p>
                            <div className="list " style={{width: "23rem",}}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-light fs-4"><strong> Cost(credits):</strong> {starships.properties?.cost_in_credits} </li>
                                    <li className="list-group-item text-light fs-4"><strong> Airspeed: </strong> {starships.properties?.max_atmosphering_speed} </li>
                                    <li className="list-group-item text-light fs-4"><strong> Passengers: </strong> {starships.properties?.passengers} </li>
                                    <li className="list-group-item text-light fs-4"><strong> Manufacturer: </strong> {starships.properties?.manufacturer} </li>
                                    <li className="list-group-item text-light fs-4"><strong> Class: </strong>{starships.properties?.starship_class}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    );
};