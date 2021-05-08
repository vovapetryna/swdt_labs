const { expect } = require('chai');
const axios = require('axios');

const token = "XiymQgdRB5IAAAAAAAAAAXJNAw279BT0GaiWnQcqgTSYVWDKY1HssdYoE74ZDnRY";
const fileName = "landscape.jpg";
let dataId = null;
let response_status;

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

function configBilder(path, data, DAA = null, contentType = "application/json") {
	let headers = { "Content-Type": contentType }
	if (DAA) headers["Dropbox-API-Arg"] = DAA
	return {
		method: "post",
		url: path,
		headers: headers,
		data: data
	}
}

describe("files/upload", function () {
	const config = configBilder(
		"https://content.dropboxapi.com/2/files/upload",
		{ binary: `./${fileName}` },
		`{"path": "/testing/${fileName}","mode": "add","autorename": true,"mute": true,"strict_conflict": false}`, "application/octet-stream");

	it(`upload data`, async () => {
		response_status = null;
		await axios(config)
			.then(function (response) {
				response_status = response.status;
				dataId = response.data.id;
			})
			.catch((error) => {
				response_status = error.response.status;
			});
		expect(response_status).to.equal(200);
	});
});

describe("files/get_metadata", function () {
	const config = configBilder(
		"https://api.dropboxapi.com/2/files/get_metadata",
		{ "path": `/testing/${fileName}` }
	);

	it(`get files info`, async () => {
		response_status = null;
		let id = null;
		await axios(config)
			.then(function (response) {
				response_status = response.status;
				id = response.data.id;
			})
			.catch((error) => {
				response_status = error.response.status;
			});
		expect(response_status).to.equal(200);
		expect(id).to.equal(dataId);
	});
});

describe("Delete File", function () {
	const config = configBilder(
		"https://api.dropboxapi.com/2/files/delete_v2",
		{ "path": `/testing/${fileName}` }
	);

	it(`delete - ${fileName}`, async () => {
		response_status = 500;
		await axios(config)
			.then(function (response) {
				response_status = response.status;
			})
			.catch((error) => {
				response_status = error.response.status;
			});
		expect(response_status).to.equal(200);
	});
});