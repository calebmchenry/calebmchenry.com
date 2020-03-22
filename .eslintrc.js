module.exports = {
  extends: ["airbnb", "eslint-config-prettier"],
  env: {
    browser: true,
    jest: true,
	},
  plugins: ["react-hooks", "prettier"],
  rules: {
    "prettier/prettier": [
        "error",
        {
            "tabWidth": 2,
            "trailingComma": "es5",
            "semi": true,
            "singleQuote": true
        }
    ],
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-curly-newline": 0,
    "react/jsx-one-expression-per-line": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2
  }
}