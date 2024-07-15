// uno.config.ts
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
	theme: {
		/* breakpoints: {
			"2xl": "1536px",
			"lg": "1024px",
			"md": "768px",
			"sm": "640px",
			"xl": "1280px",
			"xs": "480px",
		}, */
		colors: {
			"bg": {
				primary: "#111218",
				secondary: "#191b24",
			},
			"card": "#191b24",
			"gray": "#212530",
			"gray-secondary": "#323748",
			"link": {
				icon: {
					bg: "#323748",
				},
				inactive: "#7881a5",
			},
			"primary": "#7289da",
			"primary-highlight": "#b3aeff",
			"primary-text": "#000",
			"secondary": "#212530",
			"secondary-text": "#fff",
			"background": "#0c0f14",
			"background-secondary": "#191b24",
			"background-highlight": "#323748",
			"text": "#dde1e3",
		},
		fontFamily: {
			discord: "Discord Font",
			inter: "Inter",
		},
	},
	transformers: [transformerDirectives()],
});
