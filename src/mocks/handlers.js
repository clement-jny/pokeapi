import { rest } from "msw";
import allPokemons from "./fixtures/allPokemons.json";

const apiBaseUrl = "https://pokeapi.co/api/v2/pokemon";

export const handlers = [
	rest.get(apiBaseUrl, (req, res, ctx) => {

		const offset = Number(req.url.searchParams.get("offset"));
		const limit = Number(req.url.searchParams.get("limit"));
		//console.log(offset + " " + limit + " / " + req.url.searchParams);
		//console.log(req.url);

		const limitedPokemons = structuredClone(allPokemons);
		limitedPokemons.results = limitedPokemons.results.slice(offset, limit === 0 ? allPokemons.length : offset + limit);

		limitedPokemons.next = `${apiBaseUrl}?offset=${offset + limit}&limit=${limit}`;

		const previousOffset = Number(offset) - Number(limit);
		limitedPokemons.previous = previousOffset >= 0 ? `${apiBaseUrl}?offset=${previousOffset}&limit=${limit}` : null;


		//req.url.searchParams.set("offset", Number(offset) + Number(limit));
		//limitedPokemons.previous = offset === Number(0) ? null : req.url.origin + req.url.pathname;
		//limitedPokemons.next = limit === allPokemons.count ? null : req.url.origin + req.url.pathname + "?" + req.url.searchParams;
		//req.url.searchParams.set("offset", limit);
		//limitedPokemons.next = req.url.origin + req.url.pathname + "?offset=" + limit + "&limit=" + limit;
		// limitedPokemons.previous = req.url

		//console.log(req.url.searchParams.get("offset") + " / " + req.url.searchParams);
		
		//console.log(limitedPokemons.previous);
		//console.log(limitedPokemons.next);
		//console.log(limitedPokemons.results.length);

		//console.log(offset + " " + limit + " / " + req.url.searchParams);
		return res(
			ctx.delay(),
			ctx.status(200),
			ctx.json(limitedPokemons)
		);
	})
]