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
		console.log(characters);
        setData(characters.properties)
        console.log(data)
	}, [characters])



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
                            <h3 className="text-warning fs-3">

                            </h3>
                        </div>
                    </div>
                </div>
        </div>
        
    );
};