const path = require("path");

module.exports = {
    entry: [
        "./src/js/navigation.js",
        "./src/js/image-gallery.js",
        "./src/js/events.js",
        "./src/js/form.js"
    ],
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "app.bundle.js"
    }
};
