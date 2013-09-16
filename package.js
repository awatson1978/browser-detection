Package.describe({
    summary: "Meteorite package that provides browser detection."
});

Package.on_use(function (api) {
    api.export('BrowserDetect');

    api.use('standard-app-packages');
    api.add_files('browser-detection.js', ["client"]);
});
