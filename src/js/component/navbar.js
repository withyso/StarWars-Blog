import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar mb-4">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Star_Wars_logo.png" style={{width: "10rem",}} className="card-img-top ms-3" alt="..."/>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-warning me-3">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
