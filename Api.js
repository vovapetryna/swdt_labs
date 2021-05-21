const { expect } = require('chai');
const axios = require('axios');

class Api {
  constructor(file, token) {
    this.file = file;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  configBilder(path, data, DAA = null, contentType = "application/json") {
    let headers = { "Content-Type": contentType }
    if (DAA) headers["Dropbox-API-Arg"] = DAA
    return {
      method: "post",
      url: path,
      headers: headers,
      data: data
    }
  }

  async requester(config) {
    let statusCode = [];
    let resp = []
    try {
      resp = [await axios(config)];
      statusCode = [resp[0].status];
    } catch (er) { statusCode = [-1] }
    return [statusCode, resp];
  }

  async upload() {
    const config = this.configBilder(
      "https://content.dropboxapi.com/2/files/upload",
      { binary: `./${this.file}` },
      `{"path": "/testing/${this.file}","mode": "add","autorename": true,"mute": true,"strict_conflict": false}`, "application/octet-stream");
    const [status, data] = await this.requester(config);
    return [status, data.map(v => v.data.id)]
  }

  async getMeta() {
    const config = this.configBilder(
      "https://api.dropboxapi.com/2/files/get_metadata",
      { "path": `/testing/${this.file}` }
    );
    const [status, data] = await this.requester(config);
    return [status, data.map(v => v.data.id)]
  }

  async delete() {
    const config = this.configBilder(
      "https://api.dropboxapi.com/2/files/delete_v2",
      { "path": `/testing/${this.file}` }
    );
    return await this.requester(config);
  }
}

module.exports.Api = Api;