module.exports = {
    parser: "babel-eslint",
    extends: ["airbnb", "prettier"],
    env: {
        jest: true,
        browser: true
    },
    rules: {
        "no-undef": 0, // checked by flow
        "import/prefer-default-export": 0,
        "arrow-body-style": 0,
        "no-console": 0
    }
};
