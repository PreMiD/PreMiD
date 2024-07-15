import { defineI18nLocale } from "#i18n";

export default defineI18nLocale(() => ({
	layout: {
		ads: {
			error: "Please support us by disabling your ad blocker.",
		},
	},
	component: {
		searchBar: {
			search: "Search",
			sortBy: "Sort by",
			searchPresence: "Search Presence",
			sort: {
				mostUsed: "Most Used",
				alphabetical: "Alphabetical",
			},
			categories: {
				all: "All",
				anime: "Anime",
				games: "Games",
				music: "Music",
				other: "Other",
				socials: "Socials",
				videos: "Videos & Streams",
			},
		},
		browserCard: {
			wip: "WIP",
			support: {
				safari: "We're working on supporting Safari, stay tuned!",
			},
		},
		userChip: {
			loading: "Loading...",
		},
		storeCard: {
			addPresence: "Add",
			removePresence: "Remove",
		},
		donationModal: {
			title: "A Quick Favor...",
			description: "We hope you're gonna love PreMiD! If it brings a smile to your face, why not spread some love back? Our team of volunteers put their hearts into making it awesome just for you!",
			continue: "Continue",
			close: "Close",
			patreon: "Support on {name}",
			github: "Sponsor on {name}",
			holdTight: "Hold tight... loading the magic button...",
		},
	},
	header: {
		links: {
			contributors: "Contributors",
			downloads: "Downloads",
			features: "Features",
			store: "Store",
		},
	},
	page: {
		users: {
			userPage: {
				title: "Presence Contributions",
				error: {
					title: "Error",
					description: "We're having trouble loading this user... Please try again later.",
				},
			},
		},
		home: {
			meta: {
				title: "Home",
			},
			title: "Enhance Your Online Presence With PreMiD",
			subtitle: "Show your friends what {word} you're enjoying.",
			words: {
				music: "Music",
				videos: "Videos",
				streams: "Streams",
				media: "Media",
			},
			description: "PreMiD is a simple, powerful tool that allows you to share your current media activity across multiple platforms like YouTube, Disney+, Netflix, and more. Stay connected and let your friends see what you're up to in real-time.",
			getStarted: "Get Started",
			sections: {
				feature: {
					title: "Why You'll Love PreMiD",
					feature1: {
						title: "Privacy Control",
						description: "Take charge of your privacy settings and decide what activities you share with others. Your data, your rules.",
					},
					feature2: {
						title: "Community Driven",
						description: "Experience unparalleled support for a multitude of platforms, powered by a passionate and dedicated community.",
					},
					feature3: {
						title: "Customizable Settings",
						description: "Tailor your PreMiD experience with extensive customization options to suit your preferences and needs.",
					},
					feature4: {
						title: "Easy Setup",
						description: "Get up and running with PreMiD in no time. Our straightforward setup process ensures a hassle-free start.",
					},
					feature5: {
						title: "Discord ToS Compliant",
						description: "Fully compliant with Discord's Terms of Service by utilizing official endpoints provided by Discord.",
					},
					feature6: {
						title: "Future Features",
						description: "Stay tuned for exciting new features and improvements that will enhance your PreMiD experience even further.",
					},
				},
				howItWorks: {
					title: "How It Works",
					step1: {
						title: "Install the Extension",
						description: "Add PreMiD to your browser.",
					},
					step2: {
						title: "Login with Discord",
						description: "Connect PreMiD with your Discord account.",
					},
					step3: {
						title: "Add Services",
						description: "Choose the services you want to display, like YouTube, Disney+, and more.",
					},
					step4: {
						title: "Enjoy",
						description: "Share your activity and enjoy using PreMiD.",
					},
				},
				callToAction: {
					title: "Ready To Get Started?",
					description: "Join the {count} users who are already love PreMiD.",
					button: "Start Now",
				},
			},
		},
		contributors: {
			title: "Contributors",
			presenceDevelopers: "Presence Developers",
			staff: "Staff",
			supporters: "Supporters",
			translators: "Translators",
			avatar: {
				tooltip: "Click to copy {name}'s avatar",
			},
		},
		downloads: {
			title: "Downloads",
			steps: {
				install: "Install Extension",
				login: "Login with Discord",
				add: "Add Presences",
				showoff: "Show off!",
			},
			section: {
				heading: {
					title: "Time to show off.",
					description: "Use PreMiD now and show off to your friends what you're doing, maybe you find someone with the same interests.",
					getStarted: "Get Started",
					extension: "Extension",
				},
			},
			browser: {
				your: "Your browser",
				other: "Other browsers",
				based: "{browser} based",
			},
			mobile: {
				title: "Bad news!",
				description: "PreMiD is not available for mobile devices, sorry!",
			},
			alphaAccess: {
				title: "Unlock Exclusive Alpha Access!",
				description: "Step into the future of PreMiD by becoming a Patron or sponsoring us on GitHub. Your support not only propels our development but also grants you first access to the most innovative features we’re crafting. Experience the cutting-edge of what PreMiD can offer and influence its trajectory with your feedback. It's not just about being first—it's about being part of something bigger.",
				callToAction: "Learn More & Join the Innovation",
			},
			faq: "Frequently Asked Questions",
			faqs: {
				q1: {
					question: "What is PreMiD?",
					answer: "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord activity status.",
				},
				q2: {
					question: "How do I use PreMiD?",
					answer: "You can use PreMiD by installing the extension and logging in with your Discord account. Once you're logged in, you can add presences to your profile and show off to your friends.",
				},
				q3: {
					question: "Is PreMiD against Discord's ToS?",
					answer: "No, PreMiD is not against Discord's ToS. PreMiD uses Discord's API (including gated API endpoints provided by Discord) to set your activity. This means that PreMiD is in full compliance with Discord's ToS.",
				},
				q4: {
					question: "What services does PreMiD support?",
					answer: "PreMiD supports many different services including YouTube, Twitch, and Netflix. The list of supported services is constantly growing. You can view the complete list of Presences on our store page.",
				},
				q5: {
					question: "How can I contribute to PreMiD?",
					answer: "You can contribute to PreMiD by joining our community on GitHub. You can help by reporting issues, suggesting features, or contributing code.",
				},
				q6: {
					question: "Is PreMiD free to use?",
					answer: "Yes, PreMiD is free to use. However, we do accept donations through Patreon and GitHub Sponsors to help support the development of the project.",
				},
				q7: {
					question: "What should I do if I encounter an issue with PreMiD?",
					answer: "If you encounter any issues with PreMiD, you can join our Discord server for support. We also have a troubleshooting guide on our documentation.",
				},
				q8: {
					question: "PreMiD doesn't support xyz, can you add it?",
					answer: "Our so called Presences are community-driven, we don't have the resources to add every single platform. However, you can add your own Presence by following the instructions on our documentation.",
				},
				q9: {
					question: "How often is PreMiD updated?",
					answer: "We are a small volunteer-driven project, we aim to update PreMiD as often as possible but we can't promise that we will always be on top of things.",
				},
			},
		},
		store: {
			title: "Store",
			noPresence: "No presence matches your search...",
			presence: {
				button: {
					reportIssue: "Report an Issue",
					suggestFeature: "Suggest a Feature",
					viewCode: "View Code",
				},
				title: {
					description: "Description",
					information: "Information",
				},
				informationSection: {
					contributors: "Contributors:",
					version: "Version: {version}",
					users: "Users: {users}",
					tags: "Tags:",
					supportedUrls: "Supported URLs:",
				},
			},
			header: { categories: "Categories", search: "Search Presence" },
		},
	},
	footer: {
		partners: "Partners",
		followUs: "Follow us",
		supportUs: "Support us",
		more: "More",
		legal: "Legal",
		supportList: {
			donate: "Donate",
			contribute: "Contribute",
			translate: "Translate",
		},
		moreList: {
			faq: "FAQ",
			documentation: "Documentation",
			status: "Status",
		},
		legalList: {
			privacyPolicy: "Privacy Policy",
			termsOfService: "Terms of Service",
			cookiePolicy: "Cookie Policy",
		},
		withLoveBy: "With",
		by: "by",
		copyright: "© {year}-{currentYear} {company} All rights reserved.",
	},
	error: {
		404: {
			title: "404",
			message: "The page you're looking for doesn't exist.",
		},
		500: {
			title: "500",
			message: "Something went wrong on our end.",
		},
		default: {
			title: "Error",
			message: "Something went wrong on our end.",
			button: "Go Back",
		},
	},
}));
