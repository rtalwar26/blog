const isProduction = process.env.NODE_ENV === 'production';
module.exports = require("marko-starter").projectConfig({
    name: "Rtalwar26-blog",
    lassoConfig: {
        bundlingEnabled: isProduction,
        fingerprintsEnabled: isProduction,
        require: {},
        minifyJS: isProduction,
        urlPrefix: isProduction ? "/blog" : "/static",
        plugins: [
            'lasso-marko',
            {
                "plugin": "lasso-sass",
                "config": {
                    "includePaths": ["./node_modules", "./src/styles"],
                    "indentedSyntax": true
                }
            }
        ]
    }
});
