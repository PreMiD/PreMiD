import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Documentation",
	description: "Official Documentation",
	locales: {
		root: {
			label: "English",
			lang: "en-US",
		},
		de: {
			label: "Deutsch",
			lang: "de-DE",
		},
	},
	themeConfig: {
		nav: [
			{
				text: "Presence Development",
				link: "/dev/getting-started",
			},
			{
				text: "Reference",
				link: "/reference/presence",
			},
		],
		sidebar: {
			"/default": {
				base: "/",
				items: [
					{
						text: "Getting Started",
						link: "/",
						items: [
							{
								text: "Introduction",
								link: "/introduction/",
							},
							{
								text: "Installation",
								link: "/installation/",
							},
							{
								text: "Setup",
								link: "/setup/",
							},
							{
								text: "FAQ",
								link: "/faq/",
							},
						],
					},
					{
						text: "Development",
						link: "/development/",
						items: [
							{
								text: "Presence Development",
								link: "/presence-development/",
								collapsed: true,
								items: [
									{
										text: "Getting Started",
										link: "/presence-development/getting-started/",
									},
									{
										text: "Creating a Presence",
										link: "/presence-development/creating-a-presence/",
									},
								],
							},
						],
					},
					{
						text: "Contribute",
						link: "/contribute/",
						items: [
							{
								text: "Report a Bug",
								link: "https://github.com/PreMiD",
							},
							{
								text: "Submit a Feature",
								link: "https://discord.premid.app",
							},
							{
								text: "Donate",
								link: "https://patreon.com/Timeraa",
							},
							{
								text: "Translate",
								link: "https://crowdin.com/project/premid",
							},
						],
					},
				],
			},
			"/reference/": {
				base: "/reference",
				items: [
					{
						text: "Reference",
						link: "/presence",
						items: [
							{
								text: "Presence",
								link: "/presence",
							},
							{
								text: "Iframe",
								link: "/iframe",
							},
						],
					},
				],
			},
		},
		socialLinks: [
			{ icon: "github", link: "https://github.com/PreMiD" },
			{ icon: "discord", link: "https://discord.premid.app" },
			{ icon: "x", link: "https://x.com/PreMiDapp" },
		],
		i18nRouting: true,
		logo: "/logo.svg",
		search: { provider: "local" },
	},
	lastUpdated: true,
});
