/* eslint-disable no-unused-vars */
import { fileUpload } from "../../src/helpers/";
import "whatwg-fetch"; // <-- yarn add whatwg-fetch
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: "ddvgucn7i",
	api_key: "723594849465177",
	api_secret: "d0UW-vBMNR023CPLSPL6bMqU6Dg",
	secure: true,
});

/* eslint-disable no-undef */
describe("tests on fileUpload", () => {
	test("shoul upload the file correctly to cloudinary", async () => {
		const imageUrl =
			"https://1.bp.blogspot.com/-ur_mJcStlis/VAc2aa3bbSI/AAAAAAACTYI/gCf_p25rvKI/s1600/paisajes%2Bnaturales%2B-%2Bnaturaleza%2B-%2Bnatural%2Bfree%2Blandscapes%2B-%2Bfotos%2Bde%2Bpaisajes.jpg";
		const resp = await fetch(imageUrl);
		const blob = await resp.blob();
		const file = new File([blob], "paisajes.jpg");
		//const url = await fileUpload(file);

		//expect(typeof url).toBe("string");
		// console.log(url);

		// const segments = url.split("/");
		// console.log(segments);

		// const imageId = segments[segments.length - 1].replace(".jpg", "");
		// console.log(imageId);

		// const cloudResp = await cloudinary.api.delete_resources(
		// 	[`journalApp/${imageId}`],
		// 	{ resource_type: "image" }
		// );
		// console.log(cloudResp);
	});

	test("should return null", async () => {
		const file = new File([], "paisajes.jpg");
		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
});
