import { text } from "node:stream/consumers";
import type { DefaultTheme } from "vitepress";
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
		// de: {
		// 	label: "Deutsch",
		// 	lang: "de-DE",
		// },
	},
	themeConfig: {
		editLink: {
			pattern: "https://github.com/PreMiD/PreMiD/edit/monorepo/apps/docs/:path",
			text: "Edit this page on GitHub",
		},
		nav: nav(),
		sidebar: {
			"/default": {
				base: "/",
				items: sidebar(),
			},
			"/troubleshooting": {
				base: "/troubleshooting",
				items: sidebarTroubleshooting(),
			},
			"/reference/": {
				base: "/reference",
				items: sidebarReference(),
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

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: "Presence Development",
			link: "/dev/getting-started",
		},
		{
			text: "Reference",
			link: "/reference/presence",
		},
		{
			text: "Troubleshooting",
			link: "/troubleshooting",
		},
	];
}
function sidebar(): DefaultTheme.SidebarItem[] {
	return [
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
	];
}

function sidebarTroubleshooting(): DefaultTheme.SidebarItem[] {
	return [{
		items: [
			{
				text: "Troubleshooting",
				link: "/",
			},
  {
				text: "Feature Guide",
   				link: "/extglossary",
			},
			{
				text: "Resolving Issues",
				link: "/resolving-issues",
				base: "/troubleshooting/issues",
				items: [
					{
						text: "Extension Based",
						link: "/extension-based",
					},
					{
						text: "Presence Based",
						items: [{
							text: "media",
							link: "/media-presence-based",
						},
						],
						link: "/media-presence-based",
					},
				],
			},
		],
	},
	];
}
function sidebarReference(): DefaultTheme.SidebarItem[] {
	return [
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
	];
}
