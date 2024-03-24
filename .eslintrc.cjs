module.exports = {
	extends: ["@recodive/eslint-config"],
	overrides: [
		{
			extends: ["plugin:@typescript-eslint/disable-type-checked"],
			files: ["./**/*.{cjs,js,jsx}"],
		},
	],
	parserOptions: {
		project: "./tsconfig.json",
	},
};
