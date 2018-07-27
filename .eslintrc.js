module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:node/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "node/exports-style": [
            "error", 
            "module.exports"
        ],
        "node/prefer-global/buffer": [
            "error", 
            "always"
        ],
        "node/prefer-global/console": [
            "error", 
            "always"
        ],
        "node/prefer-global/process": [
            "error", 
            "always"
        ],
        "node/prefer-global/url-search-params": [
            "error", 
            "always"
        ],
        "node/prefer-global/url": [
            "error", 
            "always"
        ],
        "no-console": [
            "off"
        ],
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};