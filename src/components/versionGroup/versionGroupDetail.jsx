import { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Loading } from "../loading";

export const VersionGroupDetail = () => {
	let { state } = useLocation();
	//const { versionGroupName } = useParams();
	const [versionGroup, setVersionGroup] = useState(null);

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
				setVersionGroup(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return versionGroup ?
	(
		<div className="">
			<h1 className="text-center text-3xl my-8">{versionGroup.name}</h1>
			<h2 className="text-center text-2xl my-8">{versionGroup.generation.name}</h2>

			<p>Associted version:</p>

			{
				versionGroup.versions.map(({ name }) => (
					<p>{name}</p>
				))
			}

			<p>Pokedex:</p>
			{
				versionGroup.pokedexes.map(({ name, url }) => (
					<>
						<p>{name}</p>
						<Link to={`pokedex/${name}`} state={{ url: url }} className="btn">See pokemons</Link>
					</>
				))
			}
		</div>
		
	)
	: (<Loading />)
};