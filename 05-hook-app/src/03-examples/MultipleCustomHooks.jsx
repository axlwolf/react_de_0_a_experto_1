import { Quote, Loader } from "../components/";
import { useFetch, useCounter } from "../hooks";

// const APIURL = "https://api.gameofthronesquotes.xyz/v1/character/jon";
//const APIURL = "https://api.gameofthronesquotes.xyz/v1/author/jon/";

const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading } = useFetch(
		`https://api.gameofthronesquotes.xyz/v1/author/jon/${counter}`
	);

	const { sentence, character } = !!data && data;

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />
			<Loader isLoading={isLoading} />
			<Quote sentence={sentence} character={character} />

			<button
				className="btn btn-primary"
				disabled={isLoading}
				onClick={() => increment()}
			>
				Next quote
			</button>
		</>
	);
};

export default MultipleCustomHooks;
