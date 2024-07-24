<script lang="ts" setup>
import { DiscordUserCard } from "@discord-user-card/vue";
import "@discord-user-card/vue/style.css";

const { t, locale } = useI18n();

useSeoMeta({ title: t("page.home.meta.title") });

const words = [
	t("page.home.words.music"),
	t("page.home.words.videos"),
	t("page.home.words.streams"),
	t("page.home.words.media"),
];
const currentWord = ref(words[0]);
let currentWordIndex = 0;

let wordInterval: number;
const scrollerMouseDown = ref(false);
const scroller = ref<HTMLDivElement | null>(null);
const scrollerItems = ref<HTMLUListElement | null>(null);
onMounted(async () => {
	wordInterval = window.setInterval(() => {
		currentWordIndex = (currentWordIndex + 1) % words.length;
		currentWord.value = words[currentWordIndex];
	}, 2000);

	// Draggable User Cards
	let startX: number;
	let scrollLeft: number;

	const handleMouseDown = (e: MouseEvent) => {
		scrollerMouseDown.value = true;
		startX = e.pageX - (scrollerItems.value?.offsetLeft || 0);
		scrollLeft = scrollerItems.value?.scrollLeft ?? 0;
	};

	const handleMouseUp = () => {
		scrollerMouseDown.value = false;
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!scrollerMouseDown.value)
			return;
		const x = e.pageX - (scrollerItems.value?.offsetLeft || 0);
		const walk = x - startX;

		// ensure we loop the cards
		// TODO: loop by shifting elements from back to front
		if (scrollerItems.value) {
			scrollerItems.value.scrollLeft = scrollLeft - walk;
			const scrollWidth = scrollerItems.value.scrollWidth / 2;
			if (scrollerItems.value.scrollLeft >= scrollWidth) {
				scrollerItems.value.scrollLeft -= scrollWidth;
			}
			else if (scrollerItems.value.scrollLeft <= 0) {
				scrollerItems.value.scrollLeft += scrollWidth;
			}
		}
	};

	if (scroller.value && scrollerItems.value) {
		scroller.value.addEventListener("pointerdown", handleMouseDown);
		window.addEventListener("pointerup", handleMouseUp);
		scroller.value.addEventListener("pointermove", handleMouseMove);
	}

	onUnmounted(() => {
		if (scroller.value && scrollerItems.value) {
			scroller.value.removeEventListener("pointerdown", handleMouseDown);
			window.removeEventListener("pointerup", handleMouseUp);
			scroller.value.removeEventListener("pointermove", handleMouseMove);
		}
		clearInterval(wordInterval);
	});
});

const { data: staffData } = await useFetch("/api/getStaffData");

const features = ref([
	{
		icon: "fas fa-lock",
		title: t("page.home.sections.feature.feature1.title"),
		description: t("page.home.sections.feature.feature1.description"),
	},
	{
		icon: "fas fa-users",
		title: t("page.home.sections.feature.feature2.title"),
		description: t("page.home.sections.feature.feature2.description"),
	},
	{
		icon: "fas fa-cogs",
		title: t("page.home.sections.feature.feature3.title"),
		description: t("page.home.sections.feature.feature3.description"),
	},
	{
		icon: "fas fa-check-circle",
		title: t("page.home.sections.feature.feature4.title"),
		description: t("page.home.sections.feature.feature4.description"),
	},
	{
		icon: "fas fa-handshake",
		title: t("page.home.sections.feature.feature5.title"),
		description: t("page.home.sections.feature.feature5.description"),
	},
	{
		icon: "fas fa-lightbulb",
		title: t("page.home.sections.feature.feature6.title"),
		description: t("page.home.sections.feature.feature6.description"),
	},
]);

const steps = ref([
	{
		icon: "download",
		title: t("page.home.sections.howItWorks.step1.title"),
		description: t("page.home.sections.howItWorks.step1.description"),
	},
	{
		icon: "sign-in-alt",
		title: t("page.home.sections.howItWorks.step2.title"),
		description: t("page.home.sections.howItWorks.step2.description"),
	},
	{
		icon: "plus",
		title: t("page.home.sections.howItWorks.step3.title"),
		description: t("page.home.sections.howItWorks.step3.description"),
	},
	{
		icon: "smile",
		title: t("page.home.sections.howItWorks.step4.title"),
		description: t("page.home.sections.howItWorks.step4.description"),
	},
]);

const { data } = await useAsyncGql("getIndexData");

const computedUsage = computed(() =>
	Intl.NumberFormat(locale.value).format(data.value?.usage?.count ?? 0),
);

const localePath = useLocalePath();

const nonce = useNonce();
</script>

<template>
	<div>
		<!-- Hero Section -->
		<section
			class="flex flex-col items-center justify-center text-white min-h-screen"
		>
			<div class="text-center flex flex-col items-center mx-5">
				<NuxtImg
					format="webp"
					src="/assets/images/icon.png"
					alt="PreMiD Logo"
					class="mb-2 w-32"
					width="128px"
					height="128px"
					:nonce="nonce"
				/>
				<h1 class="font-extrabold mb-4 text-4xl">
					{{ $t("page.home.title") }}
				</h1>
				<i18n-t
					scope="global"
					keypath="page.home.subtitle"
					tag="p"
					class="text-2xl flex mb-8"
				>
					<template #word>
						<span class="relative flex text-center justify-center mx-2 w-25">
							<transition-group name="slide" tag="span">
								<span
									v-for="word in [currentWord]"
									:key="word"
									class="absolute w-25 font-bold left-0 text-gradient"
								>{{ word }}</span>
							</transition-group>
						</span>
					</template>
				</i18n-t>
				<p class="text-lg mb-8 max-w-2xl">
					{{ $t("page.home.description") }}
				</p>
				<NuxtLink
					:to="localePath('/downloads')"
					class="transition-colors text-white font-bold font-size-4 px-6 rounded-full shadow-lg mb-8 bg-gradient-to-r from-primary to-purple-600 py-4 border-transparent transition-transform hover:scale-105"
				>
					{{ $t("page.home.getStarted") }}
				</NuxtLink>
			</div>
			<div
				ref="scroller"
				class="w-full overflow-hidden relative max-w-screen mt25"
			>
				<div ref="scrollerItems" class="overflow-hidden">
					<ul
						:class="{ '': !scrollerMouseDown }"
						class="flex gap-4 flex-nowrap scroller-items animate-duration-50000 animate-iteration-infinite animate-ease-linear w-max"
					>
						<ClientOnly v-for="index in Array(4)" :key="index">
							<DiscordUserCard
								v-for="(card, i) in staffData"
								:key="i"
								:activities="card.activities"
								:user="card.user"
							/>
						</ClientOnly>
					</ul>
				</div>
				<div
					class="absolute left-0 bg-gradient-to-r h-full top-0 w-16 fade-left from-#111218 to-transparent"
				/>
				<div
					class="absolute top-0 right-0 h-full w-16 from-#111218 to-transparent fade-right bg-gradient-to-l"
				/>
			</div>
		</section>

		<!-- Unique Feature Section -->
		<section class="text-white mx5 mt-10 pb-12">
			<div class="text-center mx-auto container">
				<h2 class="text-4xl font-extrabold mb-12">
					{{ $t("page.home.sections.feature.title") }}
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					<div
						v-for="feature in features"
						:key="feature.title"
						class="p-6 rounded-lg shadow-lg transition hover:scale-105 feature-card bg-background-secondary transform duration-500 hover:translate-y--2"
					>
						<div class="mb-4 icon">
							<FAIcon :icon="feature.icon" class="text-gradient fa-3x" />
						</div>
						<h3 class="text-2xl font-bold mb-2">
							{{ feature.title }}
						</h3>
						<p class="text-gray-400">
							{{ feature.description }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- How It Works Section -->
		<section class="mx5 py-12 bg-gray-100">
			<div class="container mx-auto text-center">
				<h2 class="text-4xl font-extrabold mb-12 text-gray-900">
					How It Works
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4">
					<div
						v-for="(step, index) in steps"
						:key="step.title"
						class="p-6 bg-background-secondary rounded-lg relative transform transition duration-500 hover:translate-y--2 hover:scale-105 shadow-md"
					>
						<div
							class="bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 absolute w-10 h-10 top--3 left--3"
						>
							{{ index + 1 }}
						</div>
						<div class="icon mb-4">
							<FAIcon :icon="step.icon" class="fa-3x text-primary" />
						</div>
						<h3 class="font-bold mb-2 text-xl">
							{{ step.title }}
						</h3>
						<p>{{ step.description }}</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Call to Action Section -->
		<section
			class="py-12 bg-gradient-to-r from-primary to-purple-600 text-white mx5 rounded"
		>
			<div class="container mx-auto text-center">
				<h2 class="text-4xl font-extrabold mb-6">
					{{ $t("page.home.sections.callToAction.title") }}
				</h2>
				<p class="text-lg mb-6">
					<i18n-t
						scope="global"
						keypath="page.home.sections.callToAction.description"
						tag="span"
						class="font-bold"
					>
						<template #count>
							<span class="font-bold">{{ computedUsage }}</span>
						</template>
					</i18n-t>
				</p>
				<NuxtLink
					:to="localePath('/downloads')"
					class="b-none font-size-4 font-bold px-6 rounded-full shadow-lg transition-colors cursor-pointer py-3 bg-white text-black hover:bg-light-900"
				>
					{{ $t("page.home.sections.callToAction.button") }}
				</NuxtLink>
			</div>
		</section>
	</div>
</template>

<style scoped lang="scss">
/* Add styles for the sliding word effect */
.slide-enter-active,
.slide-leave-active {
	transition:
		transform 0.5s,
		opacity 0.5s;
}
.slide-enter-from {
	transform: translateY(-100%);
	opacity: 0;
}
.slide-enter-to {
	transform: translateY(0);
	opacity: 1;
}
.slide-leave-from {
	transform: translateY(0);
	opacity: 1;
}
.slide-leave-to {
	transform: translateY(100%);
	opacity: 0;
}

.text-gradient {
	background: linear-gradient(90deg, #7289da, #b3aeff);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translate(calc(-50% - 0.5rem));
	}
}

.scroller-items {
	animation-name: scroll;
}
</style>
