import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home";
import { Pokemons } from "./components/pokemons";

import "./index.css";
import { Layout } from "./components/Layout";


import { worker } from "./mocks/browser";
import { PokemonsDetails } from "./components/pokemonsDetails";
import { getPokemon } from "./api/getPokemon";
import { VersionGroupList } from "./components/versionGroup/versionGroupList";
import { VersionGroupDetail } from "./components/versionGroup/versionGroupDetail";
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
				path: "version-group/:versionGroupName/version/:versionName",
				element: <p>Version</p> //check if :versionGroupName contains :versionName
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
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
