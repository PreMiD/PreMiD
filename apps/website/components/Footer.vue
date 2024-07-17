<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();

const partners = [
	{
		href: "https://crowdin.com",
		image: "/assets/images/partners/crowdin.svg",
		label: "Crowdin",
	},
	{
		href: "https://www.atlassian.com/software/statuspage",
		image: "/assets/images/partners/statuspage.svg",
		label: "Statuspage",
	},
];

interface LinkSection {
	title: string;
	links: {
		href: string | any;
		icon?: string;
		label: string;
	}[];
}

const linkSections = computed(() => [
	{
		title: t("footer.followUs"),
		links: [
			{
				href: "https://discord.premid.app",
				icon: "fa-brands fa-discord",
				label: "Discord",
			},
			{
				href: "https://github.com/PreMiD/PreMiD",
				icon: "fa-brands fa-github",
				label: "GitHub",
			},
			{
				href: "https://x.com/PreMiDapp",
				icon: "fa-brands fa-x-twitter",
				label: "Twitter",
			},
		],
	},
	{
		title: t("footer.supportUs"),
		links: [
			{
				label: t("footer.supportList.donate"),
				href: localePath("/donate"),
			},
			{
				label: t("footer.supportList.contribute"),
				href: "https://github.com/PreMiD/PreMiD",
			},
			{
				label: t("footer.supportList.translate"),
				href: "https://crowdin.com/project/premid",
			},
		],
	},
	{
		title: t("footer.more"),
		links: [
			{
				label: t("footer.moreList.faq"),
				href: localePath("/downloads#faq"),
			},
			{
				label: t("footer.moreList.documentation"),
				href: "https://docs.premid.app",
			},
			{
				label: t("footer.moreList.status"),
				href: "https://status.premid.app",
			},
		],
	},
	{
		title: t("footer.legal"),
		links: [
			{
				label: t("footer.legalList.privacyPolicy"),
				href: localePath("/privacy"),
			},
			{
				label: t("footer.legalList.termsOfService"),
				href: localePath("/terms"),
			},
			{
				label: t("footer.legalList.cookiePolicy"),
				href: localePath("/cookie"),
			},
		],
	},
] as LinkSection[] satisfies LinkSection[]);

const nonce = useNonce();
</script>

<template>
	<div class="bg-gray min-h-50 mt-20">
		<div class="flex justify-between flex-wrap gap-5 mx-5 py-5">
			<div>
				<h1 class="font-bold font-size-4.5 pb2">
					{{ t('footer.partners') }}
				</h1>
				<div class="flex flex-wrap gap-1">
					<a
						v-for="partner in partners"
						:key="partner.href"
						class="block transition-opacity w-8 max-h-8 opacity-50 hover:opacity-100"
						:href="partner.href"
						target="_blank"
						rel="noopener noreferrer"
					>
						<NuxtImg :src="partner.image" :alt="partner.label" height="32px" width="32px" :nonce="nonce" />
					</a>
				</div>
			</div>
			<div v-for="section in linkSections" :key="section.title">
				<h1 class="font-bold font-size-4.5 pb2">
					{{ section.title }}
				</h1>
				<ol>
					<li v-for="link in section.links" :key="link.label" class="mb-2">
						<a :href="link.href" target="_blank" class="flex gap-1 items-center color-#878b99 hover:c-light-9">
							<FAIcon v-if="link.icon" class="h-5 w-5" :icon="link.icon" />
							<span>{{ link.label }}</span>
						</a>
					</li>
				</ol>
			</div>
		</div>
		<div class="justify-center text-center mt-5 pb-5">
			<span class="items-center inline-flex gap-2">
				{{ t('footer.withLoveBy') }}
				<FAIcon class="h-4 w-4 c-red" icon="fa-solid fa-heart" />
				{{ t('footer.by') }}
				<a href="https://recodive.com" target="_blank">Recodive</a>
			</span>
			<br>
			<div class="mt2 text-xs color-light-9">
				{{ t('footer.copyright', { year: "2018", currentYear: new Date().getFullYear(), company: 'Recodive oHG.' }) }}
			</div>
		</div>
	</div>
</template>
