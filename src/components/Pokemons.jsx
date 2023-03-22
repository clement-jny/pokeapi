import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./loading";

export const Pokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [maxPokemons, setMaxPokemons] = useState(null);
	const [search, setSearch] = useState("");

	const [limit, setLimit] = useState(20);
	const [urlToFetch, setUrlToFetch] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`);

	const [previousUrl, setPreviousUrl] = useState(null);
	const [nextUrl, setNextUrl] = useState(null);

	useEffect(() => {
		fetch(urlToFetch)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error(res.status);
				}
			})
			.then((res) => {
				setPokemons(res.results);
				setMaxPokemons(res.count);
				setPreviousUrl(res.previous);
				setNextUrl(res.next);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [urlToFetch]);


	return (
		<div> {/* className="flex flex-col justify-center items-center" */}
			<h1>Les pokémons, {maxPokemons} au total!</h1>

			<div className="form-control">
				<label className="input-group input-group-vertical">
					<span>Search</span>
					<input className="input input-bordered" type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
				</label>
			</div>

			<div className="form-control">
				<label className="input-group">
					<span>Number</span>
					<select className="select select-bordered"
						onChange={(e) => {
							setLimit(e.target.value);
							setUrlToFetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${e.target.value}`)
						}}>
						<option defaultValue="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value={maxPokemons}>Tous - {maxPokemons}</option>
					</select>
				</label>
			</div>

			<div className="btn-group">
				<button className={`btn ${previousUrl ? "" : "btn-disabled"}`}
					onClick={() => {
						setUrlToFetch(previousUrl);
					}}>Prev</button>

				<button className={`btn ${nextUrl ? "" : "btn-disabled"}`}
					onClick={() => {
						setUrlToFetch(nextUrl);
					}}>Next</button>
			</div>

			{
				pokemons.length > 0 ?
					<div className="grid grid-cols-4 gap-7 m-8">
						{
							pokemons
								.filter(({ name }) => name.includes(search))
								.map(({ name, url }) => (
									<>
										<div className="card card-bordered bg-slate-100" key={name}>
											<figure className="px-10 pt-10">
												<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${url.split('/')[6]}.png`} alt={name} className="rounded-xl" />
											</figure>
											<div className="card-body items-center text-center">
												<h2 className="card-title">
													{name}
												</h2>
												<div className="badge badge-ghost"> {url.split('/')[6]} / {maxPokemons}</div>
												<div className="card-actions">
													{/* The button to open modal */}
													{/* <label htmlFor={`modal-${name}`} className="btn">See more</label> */}

													<Link to={`/pokemon/${url.split('/')[6]}`} className='btn'>See more</Link>
												</div>
											</div>
										</div>

										{/* Put this part before </body> tag */}
										{/* <input type="checkbox" id={`modal-${name}`} className="modal-toggle" />
										<label htmlFor={`modal-${name}`} className="modal cursor-pointer">
											<label className="modal-box relative" htmlFor="">
												<h3 className="text-lg font-bold">Pokemon : {name}</h3>
											</label>
										</label> */}
									</>
								))
						}
					</div>
					: <Loading />
			}
		</div>
	);
};