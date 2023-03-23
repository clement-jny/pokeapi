import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Loading } from "../loading";

export const PokemonsDetails = () => {
	const { id } = useParams();

	const [pokemon, setPokemon] = useState(null);
	//const pokemon = useLoaderData();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				setPokemon(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	return pokemon ?
		<>
			<figure className="px-10 pt-10">
				<img src={pokemon.sprites.front_default} alt={pokemon.name} className="rounded-xl" />
			</figure>
			<p>{pokemon.name}</p>
		</> : <Loading />
};