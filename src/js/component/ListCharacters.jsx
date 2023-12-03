import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const ListCharacters = (name, uid) => {


	return (
		<div className="container-fluid mb-4 view-card">
			<div className="card" style="width: 18rem;">
					<img src={uid} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h3 className="fs-3">{name}</h3>
				</div>
			</div>
		</div>
	);
};