import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Todocard } from "../component/Todocard.jsx";
import { useNavigate } from "react-router-dom";

export const PreStarships = () => {
    const { store, actions } = useContext(Context);
    const [starships, setStarships] = useState([]);
    const [nextPage , setNextPage] = useState('');
    const [previousPage , setPreviousPage] = useState('');
    const navigate = useNavigate();

    const handleStarships = async (URL) => {
        const starshipsData = await actions.getData(URL);
        setStarships(starshipsData.results);
        const nextData = await actions.getData(URL);
        setNextPage(nextData.next);
        const previousData = await actions.getData(URL);
        setPreviousPage(previousData.previous);
    }

    useEffect(() => {
		handleStarships(store.API_STARSHIPS);
	}, [])

    useEffect(() => {
	}, [starships])


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
                        handleStarships(nextPage);
                    }}>
                        Next page
                    </button>
                    <button className="btn btn-outline-warning next-page text-light" onClick={() =>{
                        handleStarships(previousPage);
                    }}>
                        Previous Page
                    </button>
                </div>
            </div>
            <div className="container-fluid card-container">
                {
                    starships.map((item)=>(
                        <Link to={`/infostarships/${item.uid}`} className="text-light">
                            <Todocard 
                                name={item.name}
                                uid={item.uid}
                                imglink={store.STARSHIPS_IMAGE}
                                key={item.uid}
                            />
                        </Link>
                    ))
                }
                
            </div>
        </div>
    );
};