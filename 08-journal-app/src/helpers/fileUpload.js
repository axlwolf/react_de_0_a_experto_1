/* eslint-disable no-unused-vars */
export const fileUpload = async (file) => {
	if (!file) throw new Error("There's no file to upload");

	const cloudUrl = "https://api.cloudinary.com/v1_1/ddvgucn7i/upload";

	const formData = new FormData();
	formData.append("upload_preset", "react-journal");
	formData.append("file", file);

	try {
		const resp = await fetch(cloudUrl, {
			method: "POST",
			body: formData,
		});

		if (!resp.ok) throw new Error("The file could not be uploaded");

		const cloudResp = await resp.json();

		return cloudResp.secure_url;
	} catch (error) {
		console.log(error);
		throw new Error(error.message);
	}
};
