<script setup lang="ts">
import Bowser from "bowser";
import type { PresenceQuery } from "#gql";
import { useExtensionStore } from "~/stores/useExtension";

const route = useRoute("store-service");
const router = useRouter();

const presence = ref<PresenceQuery["presences"][number]>();

const { data, error } = await useAsyncGql({ operation: "presence", variables: { service: route.params.service } });

if (data.value.presences.length === 0) {
	router.replace("/store");
}

presence.value = data.value.presences[0];

const presenceLink = computed(() => {
	const letter = presence.value!.metadata.service.charAt(0).toUpperCase();
	return `https://github.com/PreMiD/Presences/tree/main/websites/${letter}/${presence.value!.metadata.service}`;
});

const { userAgent } = useDevice();

const extractedInfo = computed(() => {
	if (import.meta.server) {
		return {
			os: {
				name: "Unknown",
				version: "Unknown",
			},
			browserName: "Unknown",
			browserVersion: "Unknown",
		};
	}

	const info = Bowser.getParser(userAgent);
	const os = info.getOS();
	return {
		os,
		browserName: info.getBrowserName(),
		browserVersion: info.getBrowserVersion(),
	};
});

const { locale } = useI18n();

const formattedUsers = computed(() => Intl.NumberFormat(locale.value).format(presence.value?.users ?? 0));

const extension = useExtensionStore();
const hasPresence = computed(() => extension.presences.includes(presence.value?.metadata.service ?? ""));

useSeoMeta({
	title: presence.value?.metadata.service,
	description: presence.value?.metadata.description.en,
	ogDescription: presence.value?.metadata.description.en,
	ogTitle: presence.value?.metadata.service,
	ogImage: {
		url: presence.value?.metadata.logo,
		width: 1200,
		height: 630,
		alt: presence.value?.metadata.service,
	},
	twitterCard: "summary",
	twitterTitle: presence.value?.metadata.service,
	twitterDescription: presence.value?.metadata.description.en,
	twitterImage: presence.value?.metadata.logo,
});
</script>

<template>
	<div v-if="presence" class="w-full">
		<div class="relative overflow-hidden w-full items-center flex rounded justify-between px5 flex-wrap h60 mb10">
			<img :src="presence.metadata.thumbnail" class="absolute w-full h-auto left-50 translate-x--50 opacity-75" alt="Presence thumbnail" width="1024px">

			<div class="relative flex items-center gap-5 transition-left">
				<img :src="presence.metadata.logo" class="w-auto h-25" alt="Presence logo" width="100px" height="100px">
				<h1 class="font-extrabold font-size-6">
					{{ presence.metadata.service }}
				</h1>
			</div>
			<div v-if="extension.hasExtension" class="z-1 right-20 lt-md:right-5 transition-right">
				<button v-if="hasPresence" class="bg-red c-white rounded-full font-semibold font-size-5 transition-colors cursor-pointer b-solid b-transparent px-4 py-2 duration-300 hover:bg-red-3" @click="extension.removePresence(presence.metadata.service)">
					<FAIcon class="h-4 w-4" icon="fa-solid fa-times" />
					{{ $t("component.storeCard.removePresence") }}
				</button>
				<button v-else class="bg-primary c-white rounded-full font-semibold font-size-5 transition-colors cursor-pointer b-solid b-transparent px-4 py-2 duration-300 hover:bg-primary-highlight" @click="extension.addPresence(presence.metadata.service)">
					<FAIcon class="h-4 w-4" icon="fa-solid fa-plus" />
					{{ $t("component.storeCard.addPresence") }}
				</button>
			</div>
		</div>
		<div class="flex justify-center gap-5 lt-md:flex-col">
			<div class="flex flex-col gap-5">
				<div class="rounded bg-gray min-h-30 p5">
					<h1 class="font-extrabold font-size-6 mb2">
						{{ $t("page.store.presence.title.description") }}
					</h1>
					<p class="c-text">
						{{ presence?.metadata.description.en }}
					</p>
				</div>
				<div class="rounded bg-gray p5">
					<div class="flex justify-between">
						<div class="flex gap-3 flex-wrap">
							<a
								:href="`https://github.com/PreMiD/Presences/issues/new?template=feature_request.yml&title=Add%20a%20Feature%20to%20${presence?.metadata.service}&body=Description%20of%20the%20feature...&presence_name=${presence?.metadata.service}`"
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full transition-colors duration-300 font-semibold bg-orange text-#4e0000 py3 px4 hover:bg-op-60"
							>
								<FAIcon class="h-4 w-4" icon="fa-solid fa-lightbulb" />
								{{ $t("page.store.presence.button.suggestFeature") }}
							</a>
							<ClientOnly>
								<a
									:href="`https://github.com/PreMiD/Presences/issues/new?template=bug_report.yml&os=${extractedInfo.os.name}%20${extractedInfo.os.version}&browser=${extractedInfo.browserName}%20${extractedInfo.browserVersion}&title=Report%20an%20Issue%20for%20${presence?.metadata.service}&body=Description%20of%20the%20issue...&presence_name=${presence?.metadata.service}`"
									target="_blank"
									rel="noopener noreferrer"
									class="py3 px4 rounded-full hover:bg-op-60 transition-colors duration-300 font-semibold bg-red-500 text-#420000"
								>
									<FAIcon class="h-4 w-4" icon="fa-solid fa-bug" />
									{{ $t("page.store.presence.button.reportIssue") }}
								</a>
							</ClientOnly>
							<a
								:href="presenceLink"
								target="_blank"
								rel="noopener noreferrer"
								class="text-white py3 px4 rounded-full hover:bg-op-60 transition-colors duration-300 font-semibold bg-gray-secondary"
							>
								<FAIcon class="h-4 w-4" icon="fa-brands fa-github" />
								{{ $t("page.store.presence.button.viewCode") }}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="rounded bg-gray p5 max-w-70 lt-md:max-w-none">
				<h1 class="font-extrabold font-size-6 mb2">
					{{ $t("page.store.presence.title.information") }}
				</h1>
				<div class="flex flex-col gap-2 min-w-60">
					<div>
						<p class="mb2 c-text font-semibold">
							<FAIcon class="h-4 w-4" icon="fa-solid fa-handshake-angle" />
							{{ $t("page.store.presence.informationSection.contributors") }}
						</p>
						<UserChip :id="presence?.metadata.author.id" class="mb2 block ml5" />
						<UserChip v-for="contributor in presence?.metadata.contributors" :id="contributor.id" :key="contributor.id" class="mb2 ml5 block" />
					</div>
					<div>
						<p class="mb2">
							<FAIcon class="h-4 w-4" icon="fa-solid fa-tag" />
							<i18n-t scope="global" keypath="page.store.presence.informationSection.version" tag="span" class="mb2 c-text font-semibold ml1">
								<template #version>
									<span class="font-normal">{{ presence?.metadata.version }}</span>
								</template>
							</i18n-t>
						</p>
					</div>
					<div>
						<p class="mb2">
							<FAIcon class="h-4 w-4" icon="fa-solid fa-cart-arrow-down" />
							<i18n-t scope="global" keypath="page.store.presence.informationSection.users" tag="span" class="ml1 mb2 c-text font-semibold">
								<template #users>
									<span class="font-normal">{{ formattedUsers }}</span>
								</template>
							</i18n-t>
						</p>
					</div>
					<div>
						<p class="mb2 c-text font-semibold">
							<FAIcon class="h-4 w-4" icon="fa-solid fa-tags" />
							{{ $t("page.store.presence.informationSection.tags") }}
						</p>
						<div class="flex flex-wrap gap-2 ml5 mt2">
							<span v-for="tag in presence?.metadata.tags" :key="tag" class="bg-gray-secondary rounded-full c-text font-semibold text-3 py1 px2">
								{{ tag }}
							</span>
						</div>
					</div>
					<div>
						<p class="mb2 font-semibold">
							<FAIcon class="h-4 w-4" icon="fa-solid fa-link" />
							{{ $t("page.store.presence.informationSection.supportedUrls") }}
						</p>
						<ul class="ml5">
							<li v-if="typeof presence?.metadata.url === 'string'">
								{{ presence?.metadata.url }}
							</li>
							<li v-for="url in presence?.metadata.url" v-else :key="url" class="mb2">
								<a :href="`//${url}`" target="_blank" rel="noopener noreferrer" class="c-text hover:underline">{{ url }}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- 		<ScriptGoogleAdsense
			data-ad-client="ca-pub-1575460061917202"
			data-ad-slot="5541572189"
			data-ad-format="auto"
			:data-full-width-responsive="true"
		>
			<template #error>
				{{ $t("layout.ads.error") }}
			</template>
		</ScriptGoogleAdsense> -->
	</div>
	<div v-else-if="error" class="flex justify-center items-center h-full">
		{{ error }}
	</div>
</template>
