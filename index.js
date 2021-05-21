const { expect } = require('chai');
const { Api } = require('./Api');

const token = "XiymQgdRB5IAAAAAAAAAAXJNAw279BT0GaiWnQcqgTSYVWDKY1HssdYoE74ZDnRY";
const fileName = "landscape.jpg";
let dataId = [];
const api = new Api(fileName, token);

describe("files/upload", function () {
	it(`upload data`, async () => {
		const [code, id] = await api.upload();
		dataId = id;
		expect(code).to.eql([200]);
	});
});

describe("files/get_metadata", function () {
	it(`get files info`, async () => {
		const [code, id] = await api.getMeta();
		expect(code).to.eql([200]);
		expect(id).to.eql(dataId);
	});
});

describe("Delete File", function () {
	it(`delete - ${fileName}`, async () => {
		const [code, _] = await api.delete();
		expect(code).to.eql([200]);
	});
});