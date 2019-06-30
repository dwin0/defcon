const path = require("path");

module.exports = {
    entry: "./src/js/events.js",
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "app.bundle.js"
    }
};
