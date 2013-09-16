Package.describe({
    summary: "Meteorite package that provides a simple history of the Dow Jones Industrial Average over 5 years."
});

Package.on_use(function (api) {
    api.export('BrowserDetect');

    api.use('standard-app-packages');
    api.add_files('browser-detection.js', ["client","server"]);
});
