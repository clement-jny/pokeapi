import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../loading";

export const PokedexList = () => {
	let { state } = useLocation();

	const [pokedex, setPokedex] = useState(null);

	useEffect(() => {
		fetch(state.url)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				setPokedex(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return pokedex ?
	(
		<div>
			<h1 className="text-center text-4xl my-8">Pokedex</h1>

			<div className="grid grid-cols-4 gap-7 m-8">
			{
				pokedex.pokemon_entries.map((pokemon) => (
					<p>{pokemon.pokemon_species.name}</p>
				))
			}
			</div>
		</div>
	)
	: (<Loading />)
};