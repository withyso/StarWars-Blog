import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Todocard } from "../component/Todocard.jsx";
import { useNavigate } from "react-router-dom";

export const PreSpecies = () => {
    const { store, actions } = useContext(Context);
    const [species, setSpecies] = useState([]);
    const [nextPage , setNextPage] = useState('');
    const [previousPage , setPreviousPage] = useState('');
    const navigate = useNavigate();

    const handleSpecies = async (URL) => {
        const speciesData = await actions.getData(URL);
        setSpecies(speciesData.results);
        const nextData = await actions.getData(URL);
        setNextPage(nextData.next);
        const previousData = await actions.getData(URL);
        setPreviousPage(previousData.previous);
    }

    useEffect(() => {
		handleSpecies(store.API_SPECIES);
	}, [])

    useEffect(() => {
		console.log(species)
	}, [species])



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
                        handleSpecies(nextPage);
                        console.log(nextPage)
                        console.log(characters)
                    }}>
                        Next page
                    </button>
                    <button className="btn btn-outline-warning next-page text-light" onClick={() =>{
                        console.log("me hiciste click")
                        console.log(previousPage)
                        handleSpecies(previousPage);
                    }}>
                        Previous Page
                    </button>
                </div>
            </div>
            <div className="container-fluid card-container">
                {
                    species.map((item)=>(
                        <Todocard 
                            name={item.name}
                            uid={item.uid}
                            imglink={store.SPECIES_IMAGE}
                        />
                    ))
                }
                
            </div>
        </div>
    );
};