import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/Home";
import { Pokedex } from "./components/Pokedex";
import { Versions } from "./components/Versions";
import { Pokemons } from "./components/Pokemons";

import "./index.css";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <p>Error 404!</p>,
		children: [
			{
				path: "pokedex",
				element: <Pokedex />
			},
			{
				path: "/versions",
				element: <Versions />
			},
			{
				path: "/pokemons",
				element: <Pokemons />
			},
			{
				path: "/pokemons/:id",
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
		<RouterProvider router={router} />
);
