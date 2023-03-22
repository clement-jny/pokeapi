import { useState, useEffect } from "react";
import { Loading } from "../loading";
import { VersionGroupCard } from "./versionGroupCard";

export const VersionGroupList = () => {
	const [versionGroup, setVersionGroup] = useState(null);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/version-group?limit=27")
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				setVersionGroup(res.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return versionGroup ?
	(
		<div className="">
			<h1 className="text-center text-4xl my-8">Version group</h1>
			
			<div className="grid grid-cols-4 gap-7 m-8">
			{
				versionGroup.map(({name, url}) => (
					<VersionGroupCard name={name} url={url} />
				))
			}
			</div>
		</div>
	)
	: (<Loading />)
};