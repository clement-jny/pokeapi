export const getPokemon = async (id) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const resInJson = await res.json();
	return resInJson;
}