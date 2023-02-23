import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const VersionGroups = () => {
	const [versions, setVersions] = useState([]);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/version-group?limit=25')
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				setVersions(res.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<h1>Les versions</h1>
			<ul>
				{versions.map((version) => (
					<li key={version.name}>{version.name} - <Link to={`/version_groups/${version.url.split('/')[6]}`} className='btn'>More details</Link></li>
				))}
			</ul>

			<div>
				<Outlet />
			</div>
		</>
	);
};