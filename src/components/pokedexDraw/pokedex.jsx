import { useState, useEffect } from "react";
import { Loading } from "../loading";
import "./pokedex.css"

export const Pokedex = () => {
	const [pokemon, setPokemon] = useState(null);
	const [search, setSearch] = useState(1);

	const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
	const [urlToFetch, setUrlToFetch] = useState(`${baseUrl}${search}`);

	const onClick = () => {
		if (search === "") {
			alert("Empty field!");
		} else {
			setUrlToFetch(`${baseUrl}${search}`);
		}
	};

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
				setPokemon(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [urlToFetch]);


	return pokemon ? (
		<div className="flex flex-col justify-center items-center">
			<div className="logo">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" height="100%" alt="logo" />
			</div>

			<div className="search-container">
				<input id="name-input" type="text" placeholder="Name / Id" value={search} onChange={(e) => setSearch(e.target.value)} />

				<div id="search-btn" className="ball-container" onClick={onClick}>
					<div className="upper-half-ball"></div>
					<div className="bottom-half-ball"></div>
					<div className="center-ball"></div>
					<div className="center-line"></div>
				</div>
			</div>

			<div id="pokedex">
				{/* <!-- Left Panel --> */}
				<div id="left-panel">
					{/* <!-- Top lights --> */}
					<div className="left-top-container">
						<svg height="100" width="225" className="left-svg">
							<polyline points="0,75 70,75 90,38 224,38" style={{fill: 'none', stroke: 'black', strokeWidth: 3}} />
						</svg>
						<div className="lights-container">
							<div className="big-light-boarder">
								<div className="big-light blue">
									<div className="big-dot light-blue"></div>
								</div>
							</div>
							<div className="small-lights-container">
								<div className="small-light red">
									<div className="dot light-red"></div>
								</div>
								<div className="small-light yellow">
									<div className="dot light-yellow"></div>
								</div>
								<div className="small-light green">
									<div className="dot light-green"></div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Center Screen --> */}
					<div className="screen-container">
						<div className="screen">
							<div className="top-screen-lights">
								<div className="mini-light red"></div>
								<div className="mini-light red"></div>
							</div>
							<div id="main-screen"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} style={{ width: 110, height: 110 }} /></div>
							<div className="bottom-screen-lights">
								<div className="small-light red">
									<div className="dot light-red"></div>
								</div>
								<div className="burger">
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
									<div className="line"></div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Bottom Buttons --> */}
					<div className="buttons-container">
						<div className="upper-buttons-container">
							<div className="big-button"></div>
							<div className="long-buttons-container">
								<div className="long-button red"></div>
								<div className="long-button light-blue"></div>
							</div>
						</div>
						<div className="nav-buttons-container">
							<div className="dots-container">
								<div>.</div>
								<div>.</div>
							</div>
							<div className="green-screen">
								<span id="name-screen">{pokemon.name}</span>
							</div>
							<div className="right-nav-container">
								<div className="nav-button">
									<div className="nav-center-circle"></div>
									<div className="nav-button-vertical"></div>
									<div className="nav-button-horizontal">
										<div className="border-top"></div>
										<div className="border-bottom"></div>
									</div>
								</div>
								<div className="bottom-right-nav-container">
									<div className="small-light red">
										<div className="dot light-red"></div>
									</div>
									<div className="dots-container">
										<div className="black-dot">.</div>
										<div className="black-dot">.</div>
										<div className="black-dot">.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- End of Left panel --> */}

				{/* <!-- Right-panel --> */}
				<div id="right-panel">
					{/* <!-- Blank container --> */}
					<div className="empty-container">
						<svg height="100%" width="100%">
							<polyline points="0,0 0,40 138,40 158,75 250,75 250,0 0,0" style={{fill: '#CEEDC7', stroke: 'none', strokeWidth: 3}} />
							<polyline points="0,40 138,40 158,75 250,75" style={{fill: 'none', stroke: 'black', strokeWidth: 3}} />
						</svg>
					</div>
					{/* <!-- Top screen --> */}
					<div className="top-screen-container">
						<div id="about-screen" className="right-panel-screen">
							Height: {pokemon.height * 10}cm Weight: {pokemon.weight / 10}kg
						</div>
					</div>
					{/* <!-- Blue Buttons --> */}
					<div className="square-buttons-container">
						<div className="blue-squares-container">
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
							<div className="blue-square"></div>
						</div>
					</div>
					{/* <!-- Center Buttons --> */}
					<div className="center-buttons-container">
						<div className="center-left-container">
							<div className="small-reds-container">
								<div className="small-light red">
									<div className="dot light-red"></div>
								</div>
								<div className="small-light red">
									<div className="dot light-red"></div>
								</div>
							</div>
							<div className="white-squares-container">
								<div className="white-square"></div>
								<div className="white-square"></div>
							</div>
						</div>
						<div className="center-right-container">
							<div className="thin-buttons-container">
								<div className="thin-button"></div>
								<div className="thin-button"></div>
							</div>
							<div className="yellow-button yellow">
								<div className="big-dot light-yellow"></div>
							</div>
						</div>
					</div>
					{/* <!-- Bottom screens --> */}
					<div className="bottom-screens-container">
						<div id="type-screen" className="right-panel-screen">{pokemon.types[0].type.name}</div>
						<div id="id-screen" className="right-panel-screen">#{pokemon.id}</div>
					</div>
				</div>
			</div>
		</div>
	)
	: (<Loading />);
};