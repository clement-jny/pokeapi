import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div id="container">
			<div className="">
				<h1>Welcome to the PokéAPI app</h1>
				<Link to="/" className="btn btn-outline">Home</Link>
				<Link to="/pokedex" className="btn btn-outline">Pokedex</Link>
				<Link to="/versions" className="btn btn-outline">Versions</Link>
				<Link to="/pokemons" className="btn btn-outline">Pokemons</Link>
			</div>
			{/* <div className="h-screen flex flex-col justify-center items-center">
				<h1>Welcome to the PokéAPI app</h1>
				<Link to="/pokedex" className="btn btn-outline">Pokedex</Link>
				<Link to="/versions" className="btn btn-outline">Versions</Link>
				<Link to="/pokemons" className="btn btn-outline">Pokemons</Link> 
			</div>*/}

			<div id="content">
				<Outlet />
			</div>
		</div>
	);
};