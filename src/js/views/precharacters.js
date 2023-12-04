import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Todocard } from "../component/Todocard.jsx";
import { useNavigate } from "react-router-dom";
import { InfoCharacter } from "./infocharacter.js";

export const PreCharacters = () => {
    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState([]);
    const [nextPage , setNextPage] = useState('');
    const [previousPage , setPreviousPage] = useState('');
    const navigate = useNavigate();


    const handleCharacters = async (URL) => {
        const charactersData = await actions.getData(URL);
        setCharacters(charactersData.results);
        const nextData = await actions.getData(URL);
        setNextPage(nextData.next);
        const previousData = await actions.getData(URL);
        setPreviousPage(previousData.previous);
    }

    useEffect(() => {
		handleCharacters(store.API_URL);
	}, [])

    useEffect(() => {
	}, [characters])


    return(
        <div>
            <div className="allbuttons">
                    <button className="btn btn-outline-warning next-page text-light homebutton" onClick={() =>{
                            console.log("me hiciste click")
                            navigate("/")
                        }}>
                            Home
                    </button>
                <div className="next-previous-buttons">
                    <button className="btn btn-outline-warning next-page text-light" onClick={() =>{
                        console.log("me hiciste click")
                        handleCharacters(nextPage);
                    
                    }}>
                        Next page
                    </button>
                    <button className="btn btn-outline-warning next-page text-light" onClick={() =>{
                        console.log("me hiciste click")
                        handleCharacters(previousPage);
                    }}>
                        Previous Page
                    </button>
                </div>
            </div>
            <div className="container-fluid card-container">
                {
                    characters.map((item)=>(
                        <Link to={`/infocharacter/${item.uid}`}>
                            <Todocard 
                                name={item.name}
                                uid={item.uid}
                                imglink={store.CHARACTERS_IMAGE}
                                key={item.uid}
                            />
                        </Link>
                        ))
                }
                
            </div>
        </div>
    );
};