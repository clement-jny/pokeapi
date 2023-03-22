import { Link } from "react-router-dom";

export const VersionGroupCard = ({ name, url }) => {
	return (
		<div className="card card-bordered bg-slate-100" key={name}>
			<div className="card-body items-center text-center">
				<h2 className="card-title h-28">{name}</h2>

				<div className="card-actions">
					<Link to={name} state={{ url: url }} className="btn">See more</Link>
					{/* <Link to={`/version-group/${url.split("/")[6]}`} className="btn">See more</Link> */}
					{/* <Link to={url.split("/")[6]} className="btn">See more</Link> */} {/* Pareil qu'au dessus au niveau du lieu d'accès */}
				</div>
			</div>
		</div>
	);
};