import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home";
import { Pokedex } from "./components/pokedex";
import { VersionGroups } from "./components/versionGroups";
import { Pokemons } from "./components/pokemons";

import "./index.css";
import { Layout } from "./components/Layout";

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
				path: "pokedex",
				element: <Pokedex />
			},
			{
				path: "version_groups",
				element: <VersionGroups />
			},
			{
				path: "version_groups/:id",
				element: <p>Version group details</p>
			},
			{
				path: "pokemons",
				element: <Pokemons />
			},
			{
				path: "pokemons/:id",
				element: <p>Pokemon details</p>
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
