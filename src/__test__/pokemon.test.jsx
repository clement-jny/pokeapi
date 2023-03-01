/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Pokemons } from "../components/pokemons";

test("je vérifie que le premier pokémon apparait", async () => {
	console.log(Pokemons)
	render(
		<MemoryRouter>
			<Pokemons />
		</MemoryRouter>
	);
	//const linkElement = screen.getByText(/bulbasaur/i);
	const poke = await screen.findByText(/bulbasaur/);
	expect(poke).toBeInTheDocument();
})