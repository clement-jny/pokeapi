import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
		<p>{versionGroup.versions.map(({ name, url }) => (<p>{name} - {url}</p>))}</p>
	)
	: (<Loading />)
};