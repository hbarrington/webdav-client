var deepmerge = require("deepmerge");

var responseHandlers = require("./response.js"),
    fetch = require("./request.js");

module.exports = {

    deleteItem: function deleteItem(url, targetPath, options) {
        options = deepmerge({ headers: {} }, options || {});
        return fetch(url + targetPath, {
                method: "DELETE",
                headers: options.headers,
                credentials: options.credentials
            })
            .then(responseHandlers.handleResponseCode);
    },

    moveItem: function moveItem(url, filePath, targetFilePath, options) {
        options = deepmerge({ headers: {} }, options || {});
        return fetch(url + filePath, {
                method: "MOVE",
                headers: deepmerge(
                    {
                        Destination: url + targetFilePath
                    },
                    options.headers
                ),
                credentials: options.credentials
            })
            .then(responseHandlers.handleResponseCode);
    }

};
