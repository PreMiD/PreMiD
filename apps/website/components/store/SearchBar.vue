<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const searchTerm = defineModel<string>();
const selectedCategory = defineModel<string>("category");
const sortOrder = defineModel<string>("sortOrder");

//* Nuxt apparently does not like using route query in defaults
searchTerm.value = route.query.search?.toString() || "";
selectedCategory.value = route.query.category?.toString() || "";
sortOrder.value = route.query.sortBy?.toString() || t("component.searchBar.sort.mostUsed");

const categories = [
	{ tag: "", text: t("component.searchBar.categories.all"), icon: "fa-solid fa-tag" },
	{ tag: "anime", text: t("component.searchBar.categories.anime"), icon: "fa-solid fa-film" },
	{ tag: "games", text: t("component.searchBar.categories.games"), icon: "fa-solid fa-gamepad" },
	{ tag: "music", text: t("component.searchBar.categories.music"), icon: "fa-solid fa-music" },
	{ tag: "other", text: t("component.searchBar.categories.other"), icon: "fa-solid fa-link" },
	{ tag: "socials", text: t("component.searchBar.categories.socials"), icon: "fa-solid fa-lightbulb" },
	{ tag: "videos", text: t("component.searchBar.categories.videos"), icon: "fa-solid fa-video" },
];

const isDropdownOpen = ref(false);
const options = [
	{ text: t("component.searchBar.sort.mostUsed"), icon: "fa-solid fa-sort-amount-down" },
	{ text: t("component.searchBar.sort.alphabetical"), icon: "fa-solid fa-sort-alpha-down" },
];

const sortByDropdown = ref<HTMLDivElement>();

function toggleDropdown() {
	isDropdownOpen.value = !isDropdownOpen.value;
}

function selectOption(option: string) {
	sortOrder.value = option;
	isDropdownOpen.value = false;
}

onClickOutside(sortByDropdown, () => {
	isDropdownOpen.value = false;
});

function updateQuery() {
	const search = searchTerm.value === "" ? undefined : searchTerm.value;
	const category = selectedCategory.value === "" ? undefined : selectedCategory.value;
	const sortBy = sortOrder.value === "" ? undefined : sortOrder.value;

	router.replace({ query: { ...route.query, search, category, sortBy } });
}

watch([searchTerm, selectedCategory, sortOrder], updateQuery);
</script>

<template>
	<div class="bg-gray rounded p-2">
		<!-- Search Bar -->
		<div class="flex items-center gap-2 h-10 relative rounded bg-gray-secondary">
			<input
				v-model.trim="searchTerm"
				autofocus
				type="text"
				class="text-white bg-transparent p-2 w-full h-10 rounded b-none outline-none text-sm placeholder:font-bold pl-8"
				:placeholder="$t('component.searchBar.search')"
			>
			<label class="absolute h-10 flex items-center left-2">
				<FAIcon class="h-4 w-4 text-primary" icon="fa-solid fa-magnifying-glass" />
			</label>
			<!-- Sort By Dropdown -->
			<div ref="sortByDropdown" class="flex items-center gap-2 relative z-50 select-none place-content-end min-w-30 mr-3">
				<div class="items-center cursor-pointer" @click="toggleDropdown">
					<p class="text-sm font-bold text-white">
						<FAIcon class="h-4 w-4 text-white" icon="fa-solid fa-sort-down" />
						{{ sortOrder }}
					</p>
				</div>
				<transition name="dropdown">
					<div v-if="isDropdownOpen" class="absolute bg-gray-secondary shadow-lg w-auto mt-1 mt-2.5 top-full rounded-b mr--3">
						<div
							v-for="option in options"
							:key="option.text"
							class="p-2 cursor-pointer flex gap-2 items-center transition-colors hover:bg-gray last:rounded-b"
							:class="{ 'text-blue-500': sortOrder === option.text }"
							@click="selectOption(option.text)"
						>
							<FAIcon :icon="option.icon" class="h-4 w-4" />
							{{ option.text }}
						</div>
					</div>
				</transition>
			</div>
		</div>
		<!-- Category Filters -->
		<div class="flex flex-wrap w-full items-center mt-2">
			<button
				v-for="c of categories"
				:key="c.text"
				class="flex items-center p-2 rounded-full font-bold border-solid border-1 cursor-pointer h-8 m-1 border-gray-secondary"
				:class="[c.tag === selectedCategory ? 'bg-primary text-white' : 'bg-transparent text-link-inactive']"
				@click="selectedCategory = c.tag"
			>
				<FAIcon class="h-4 w-4 mr-1" :class="[c.tag !== selectedCategory ? 'text-primary' : 'text-white']" :icon="c.icon" />
				{{ c.text }}
			</button>
		</div>
	</div>
</template>
