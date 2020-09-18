const fetch = require('node-fetch');

const requestHTTPService = async (relativeURL) => {
    var data = null;
    await fetch(`http://localhost:4610/api${relativeURL}`)
        .then(res => res.json)
        .then(json => {
            data = json.data;
        });
    return data;
}
module.exports.Handler = requestHTTPService;