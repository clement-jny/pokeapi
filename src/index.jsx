import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home";
import { Pokemons } from "./components/pokemon/pokemons";

import "./index.css";
import { Layout } from "./components/Layout";


import { worker } from "./mocks/browser";
import { PokemonsDetails } from "./components/pokemon/pokemonsDetails";
import { getPokemon } from "./api/getPokemon";
import { VersionGroupList } from "./components/versionGroup/versionGroupList";
import { VersionGroupDetail } from "./components/versionGroup/versionGroupDetail";
import { PokedexList } from "./components/pokedex/pokedexList";
import { Pokedex } from "./components/pokedexDraw/pokedex";
//worker.start({ onUnhandledRequest: "warn" });


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <p>Error 404!</p>,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "version-group",
				element: <VersionGroupList />
			},
			{
				path: "version-group/:versionGroupName",
				element: <VersionGroupDetail />
			},
			{
				path: "version-group/:versionGroupName/pokedex/:pokedexName",
				element: <PokedexList />
			},
			{
				path: "pokemon",
				element: <Pokemons />
			},
			{
				path: "pokemon/:id",
				element: <PokemonsDetails />,
				// loader: ({ params }) => {
				// 	return getPokemon(`${params.id}`)
				// }
			},
			{
				path: "pokedex",
				element: <Pokedex />
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
