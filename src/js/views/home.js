import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();


	return (
		<div className="Box text-center mt-5">
			<div className="card-group m-2">
					<div className="card card-character bg-dark m-3" onClick={() => {navigate('/precharacters')
					console.log('viajando..')
					}}>
							<img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="card-img-top" alt="..."/>
						<div className="card-body">
							<h3 className="card-title text-warning fs-2">Characters</h3>
						</div>
					</div>
				<div className="card card-starships bg-dark m-3" onClick={() => {navigate('/prestarships')
					console.log('viajando..')
					}} >
						<img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h3 className="card-title text-warning fs-2">Starships</h3>
					</div>
				</div>
				<div className="card card-species bg-dark m-3" onClick={() => {navigate('/prespecies')
					console.log('viajando..')
					}}>
						<img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h3 className="card-title text-warning fs-2">Species</h3>
					</div>
				</div>
			</div>
		</div>
	)
	
};
