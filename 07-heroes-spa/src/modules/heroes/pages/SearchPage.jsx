/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = "" } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);

	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length === 0;

	const { onInputChange, searchText } = useForm({
		searchText: q,
	});

	const onSearchHeroSubmit = (event) => {
		event.preventDefault();

		//if (searchText.trim().length <= 2) return;

		navigate(`?q=${searchText.toLowerCase().trim()}`);
	};

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchHeroSubmit}>
						<input
							type="text"
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button className="btn btn-outline-primary mt-2">Search</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{/* {q === "" ? (
						<div className="alert alert-primary">Search a hero</div>
					) : (
						heroes.length === 0 && (
							<div className="alert alert-danger">
								There's no hero with <b>{q}</b>
							</div>
						)
					)} */}

					<div
						className="alert alert-primary animate__animated animate__fadeIn"
						style={{ display: showSearch ? "" : "none" }}
					>
						Search a hero
					</div>

					<div
						className="alert alert-danger  animate__animated animate__fadeIn"
						style={{ display: showError ? "" : "none" }}
					>
						There's no hero with <b>{q}</b>
					</div>

					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero}></HeroCard>
					))}
					{/* <HeroCard></HeroCard> */}
				</div>
			</div>
		</>
	);
};
