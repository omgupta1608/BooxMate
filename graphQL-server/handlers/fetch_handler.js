const fetch = require('node-fetch');

var restPORT = 4610;
const requestHTTPService = async (relativeURL) => {
    var data = null;
    await fetch(`http://localhost:${restPORT}/api${relativeURL}`)
        .then(res => res.json())
        .then(json => {
            data = json.data;
        });
    return data;
}

const postHTTPService = async (relativeURL, postData) => {
    var response = null;
    await fetch(`http://localhost:${restPORT}/api${relativeURL}`, {
        method: 'POST',
		body: postData,
		headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(json => {
        data = json;
    });
    return data;
}
module.exports.Handler = requestHTTPService;
module.exports.postHandler = postHTTPService;