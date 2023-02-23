import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<div className="flex">
			<div className="h-screen w-[20%] sticky top-0 border-r border-black">
				<h1 className="text-2xl m-4 text-center">PokéAPI app</h1>

				<div className="flex flex-col space-y-3">
					<NavLink to="/" className={({ isActive }) => isActive ? "btn btn-active" : "btn btn-outline"}>Home</NavLink>
					<NavLink to="pokedex" className={({ isActive }) => isActive ? "btn btn-active" : "btn btn-outline"}>Pokedex</NavLink>
					<NavLink to="version_groups" className={({ isActive }) => isActive ? "btn btn-active" : "btn btn-outline"}>Version Groups</NavLink>
					<NavLink to="pokemons" className={({ isActive }) => isActive ? "btn btn-active" : "btn btn-outline"}>Pokemons</NavLink>
				</div>
			</div>
			
			<div className="w-full flex justify-center items-center">
				<Outlet />
			</div>
		</div>
	);
};