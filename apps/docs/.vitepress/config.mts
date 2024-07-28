import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "PreMiD",
	description: "Official Documentation",
	themeConfig: {
		logo: "/logo.svg",
		nav: [
			{
				text: "Reference",
				items: [{
					text: 'Presence',
					link: '/reference/presence'
				}]
			},
		],
		sidebar: {
			'/reference': {
				base: '/reference/',
				items: [{
					text: 'Reference',
					link: '/presence/',
					items: [{
						link: '/presence',
						text: 'Presence',
					}]
				}]
			}
		},
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/PreMiD",
			},
			{ icon: "discord", link: "https://discord.premid.app" },
			{
				icon: "x",
				link: "https://x.com/PreMiDapp",
			},
		],
		editLink: {
			pattern: "https://github.com/PreMiD/PreMiD/tree/monorepo/apps/docs/:path",
		},
		search: { provider: "local" },
	},
	lastUpdated: true,
	head: [["link", { rel: "icon", href: "/logo.svg" }]],
});
