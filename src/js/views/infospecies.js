import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Todocard } from "../component/Todocard.jsx";
import { useNavigate } from "react-router-dom";

export const InfoSpecies = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const [species, setSpecies] = useState({});
    const [data, setData] = useState({});

    const handleInfoCharacters = async (params, changestate) => {
        const speciesData = await actions.getData(`https://www.swapi.tech/api/species/${params}`)
        changestate(speciesData.result);
    }

    useEffect(() => {
		handleInfoCharacters(params.speid, setSpecies);
	}, [])

    useEffect(() => {
        setData(species.properties)
        console.log("aqui characters", species.properties)
	}, [species,data])



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
                        navigate('/prespecies')
                    }}>
                        Species
                    </button>
                </div>
                <div className="Container-fluid Box">
                    <div className="container-fluid character-box">
                            <img src={store.SPECIES_IMAGE + params.speid + '.jpg'} className="card-img-top" alt="..." style={{ width:"18rem"}}/>
                        <div className="name-description">
                            <h2 className="text-warning fs-2 main-text">
                                {
                                    species.properties?.name
                                }
                            </h2>
                            <div className="list " style={{width: "15rem",}}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-light fs-6"><strong> Classification: </strong> {species.properties?.classification}</li>
                                    <li className="list-group-item text-light fs-6"><strong> Avg lifespan: </strong>{species.properties?.average_lifespan}</li>
                                    <li className="list-group-item text-light fs-6"><strong> Language: </strong>{species.properties?.language}</li>
                                    <li className="list-group-item text-light fs-6"><strong> Eye colors: </strong>{species.properties?.eye_colors}</li>
                                    <li className="list-group-item text-light fs-6"><strong> Hair colors: </strong>{species.properties?.hair_colors}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    );
};