module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: "standard",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
		indent: "off",
		camelcase: "off",
		"no-tabs": 0,
		eqeqeq: "off",
		"no-unused-vars": "off",
		"new-cap": 0,
		semi: [
			"error",
			"always"
		],
		quotes: [
			"error",
			"double"
		],
		"linebreak-style": [
			"error",
			"unix"
		]
	}
};
