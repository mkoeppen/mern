# mern

# 1. Init NodeJS 
    
    nvm install node
    npm init


# 2. Install Express

    npm install express --save // for server, listen on ports, ...

            server.js
            --------------------
            const express = require("express");

            const port = 3000;

            const app = express();
            app.use(express.static("static"));

            app.listen(port, function () {
                console.log("App started on port " + port);
            });
            --------------------

    node server.js // run server

# 3. Use Babel to automaticly compile JSX to JS files

    npm install --save-dev babel-cli babel-preset-react

    add this lines to the scripts in the package.json:
    "compile": "node_modules/.bin/babel src --presets react,es2015 --out-dir static",
    "watch": "node_modules/.bin/babel src --presets react,es2015 --out-dir static -watch",

    npm run watch // starts the watcher

## 3.1 Converting ES2015 to ES5 with Babel

    npm install --save-dev babel-preset-es2015

    adjust lines in the package.json:
    "compile": "node_modules/.bin/babel src --presets react,es2015 --out-dir static",
    "watch": "node_modules/.bin/babel src --presets react,es2015 --out-dir static -watch",

# 4. Polyfills

    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.13.0/polyfill.js"></script>

