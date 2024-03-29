import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Todocard } from "../component/Todocard.jsx";
import { useNavigate } from "react-router-dom";

export const InfoCharacter = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const [characters, setCharacters] = useState({});
    const [data, setData] = useState({});

    const handleInfoCharacters = async (params, changestate) => {
        const characterData = await actions.getData(`https://www.swapi.tech/api/people/${params}`)
        changestate(characterData.result);
    }

    useEffect(() => {
		handleInfoCharacters(params.charid, setCharacters);
	}, [])

    useEffect(() => {
        setData(characters.properties)
        console.log("aqui characters", characters.properties)
	}, [characters,data])



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
                        navigate('/precharacters')
                    }}>
                        Characters
                    </button>
                </div>
                <div className="Container-fluid Box">
                    <div className="container-fluid character-box">
                            <img src={store.CHARACTERS_IMAGE + params.charid + '.jpg'} className="card-img-top" alt="..." style={{ width:"20rem"}}/>
                        <div className="name-description">
                            <h2 className="text-warning fs-2 main-text">
                                {
                                    characters.properties?.name
                                }
                            </h2>
                            <p className="text-light text-center bg-dark rounded-3 p-1 fw-bolder description">
                                "
                                {
                                    characters.description
                                }
                                "
                            </p>
                            <div className="list " style={{width: "20.7rem",}}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-light fs-3"><strong> Eye color: </strong>{characters.properties?.eye_color}</li>
                                    <li className="list-group-item text-light fs-3"><strong> Gender: </strong>{characters.properties?.gender}</li>
                                    <li className="list-group-item text-light fs-3"><strong> Height: </strong>{characters.properties?.height} cm</li>
                                    <li className="list-group-item text-light fs-3"><strong> Hair Color: </strong>{characters.properties?.hair_color}</li>
                                    <li className="list-group-item text-light fs-3"><strong> Mass: </strong>{characters.properties?.mass}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    );
};