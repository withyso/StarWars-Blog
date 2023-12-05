import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PreCharacters } from "./views/precharacters";
import { PreSpecies } from "./views/prespecies";
import { PreStarships } from "./views/prestarships";
import { InfoCharacter } from "./views/infocharacter";
import { InfoStarships } from "./views/infostarships";
import { InfoSpecies } from "./views/infospecies";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/precharacters" element={<PreCharacters />} />
						<Route path="/prestarships" element={<PreStarships />} />
						<Route path="/prespecies" element={<PreSpecies />} />
						<Route path="/infocharacter/:charid" element={<InfoCharacter />} />
						<Route path="/infostarships/:starid" element={<InfoStarships />} />
						<Route path="/infospecies/:speid" element={<InfoSpecies />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
