const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://www.swapi.tech/api/people/",
			API_SPECIES: "https://www.swapi.tech/api/species/",
			API_STARSHIPS: "https://www.swapi.tech/api/starships/",
			STARSHIPS_IMAGE:"https://starwars-visualguide.com/assets/img/starships/",
			CHARACTERS_IMAGE: "https://starwars-visualguide.com/assets/img/characters/",
			SPECIES_IMAGE: "https://starwars-visualguide.com/assets/img/species/",
			FAVORITES: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getData: async (URL) => {
				try{
					const response = await fetch(URL);
					if(response.status !== 200){
						console.log("Ha ocurrido un error", error)
						return
					}
					const body = await response.json();
					console.log("fetch realizado con exito")
					return body;
				}catch(error){
					console.log("ha ocurrido un error");
				}
			}
			
			,
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
