const apiKey = "PJOmP8plfGdra9RRN9w8i03ZGrMqwTnt";

export const getGifs = async (category) => {
	const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

	const resp = await fetch(APIURL);
	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));

	return gifs;
};
