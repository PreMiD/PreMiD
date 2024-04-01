import config from "@recodive/eslint-config/strictFlat";

export default [
	...config,
	{
		files: ["apps/pd/**/*", "apps/api/**/*"],
		rules: {
			"no-console": "off",
		},
	},
	{
		rules: {
			//* See when not to use it
			"@typescript-eslint/no-non-null-assertion": "off",
		},
	},
];
