import { rest } from "msw";
import allPokemons from "./fixtures/allPokemons.json";

export const handlers = [
	rest.get("https://pokeapi.co/api/v2/pokemon", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(allPokemons)
		);
	})
]