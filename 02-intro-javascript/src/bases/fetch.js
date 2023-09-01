const apiKey = "PJOmP8plfGdra9RRN9w8i03ZGrMqwTnt";

const httpCall = fetch(
	`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&`
);

httpCall
	.then((resp) => resp.json())
	.then(({ data }) => {
		const { url } = data.images.original;
		const img = document.createElement("img");

		img.src = url;

		document.body.appendChild(img);
	})
	.catch(console.warn);
