/**
 * @vitest-environment jsdom
 */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Pokemons } from "../components/pokemons";

// test("je vérifie que le premier pokémon apparait", async () => {
// 	console.log(Pokemons)
// 	render(
// 		<MemoryRouter>
// 			<Pokemons />
// 		</MemoryRouter>
// 	);
// 	//const linkElement = screen.getByText(/bulbasaur/i);
// 	const poke = await screen.findByText(/bulbasaur/);
// 	expect(poke).toBeInTheDocument();
// });

// test("Je vérifie que le premier pokemon après avoir cliqué sur le bouton Next soit le bon", async () => {
// 	render(
// 		<MemoryRouter>
// 			<Pokemons />
// 		</MemoryRouter>
// 	);

// 	const next = screen.getByRole("button", { name: "Next" });
// 	await waitFor (() => {
// 		expect(next).not.toHaveClass("btn-disabled");
// 	});
// 	fireEvent.click(next);

// 	await waitFor(() => {
// 		expect(screen.getByText("spearow")).toBeInTheDocument();
// 	});
// 	//const $poke = await screen.findByText(/spearow/);
// 	//expect($poke).toBeInTheDocument();

// 	//expect(await screen.findByText("")).toBeInTheDocument();

// 	//const poke = await screen.findByText("spearow");
// 	//expect(poke).toBeInTheDocument();
// });


test("Vérifie que le nombre de pokémon afficher correspond à la limit définit", async () => {
	render(<MemoryRouter><Pokemons /></MemoryRouter>);

	const select = screen.getByRole("combobox");

	//console.log(select.lastChild);

	expect(screen.getByRole("option", { name: 20 }).selected).toBe(true);
	
	fireEvent.change(select, { target: { value: 50 } });

	expect(screen.getByRole("option", { name: 20 }).selected).toBe(false);
	expect(screen.getByRole("option", { name: 50 }).selected).toBe(true);
});