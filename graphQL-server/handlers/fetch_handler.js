const fetch = require('node-fetch');

const requestHTTPService = async (relativeURL) => {
    var data = null;
    await fetch(`http://localhost:4000${relativeURL}`)
        .then(res => res.json)
        .then(json => {
            data = json;
        });
    return data;
}
module.exports.Handler = requestHTTPService;