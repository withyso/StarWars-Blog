import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ListCharacters } from "../component/ListCharacters.jsx";

export const PreCharacters = () => {
    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState([]);
    
    const getCharacters = async () => {
        try{
            const response = await fetch("https://www.swapi.tech/api/people/");
            if(response.status !== 200){
                console.log("Ha ocurrido un error", error)
                return
            }
            const body = await response.json();
            return {
                results: body.results,
                next: body.next
            }
        }catch(error){
            console.log(error);
        }
    }

    const handleCharacters = async () => {
        const charactersData = await getCharacters();
        setCharacters(charactersData.results);
        console.log(characters);
    }
    

    useEffect(() => {
		handleCharacters();
	}, [])

    return(

        <div className="container">
        </div>
    );
};