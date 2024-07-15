<script setup lang="ts">
import type { LocationQuery } from "vue-router";
import { useExtensionStore } from "~/stores/useExtension";

const extension = useExtensionStore();

const { t } = useI18n();
useSeoMeta({
	title: t("page.store.title"),
});

const { data } = await useAsyncGql({ operation: "presences" });

const sortBy = ref<string>("");
const totalPages = ref(0);
const presences = computed(() => getPresencePage());
const route = useRoute();
const currentPage = ref(Number.parseInt(route.query.page?.toString() || "1"));
const searchTerm = ref(route.query.search?.toString() || "");
const selectedCategory = ref("");

async function handleQuery(query: LocationQuery) {
	const pageQuery = query.page?.toString() || "1";
	const parsedPage = Number.parseInt(Number.isNaN(Number(pageQuery)) ? "1" : pageQuery);
	currentPage.value = Math.max(1, Math.min(parsedPage, totalPages.value));
	searchTerm.value = query.search?.toString() || "";
	selectedCategory.value = query.category?.toString() || "";
}

function getPresencePage(page = currentPage.value, search = searchTerm.value) {
	const pageSize = 8;
	const startIndex = (page - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const sortedPresences = (
		selectedCategory.value
			? data.value.presences.filter(p => p.metadata.category === selectedCategory.value)
			: data.value.presences
	)
		.filter(p => p.metadata.service.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) => {
			if (sortBy.value === t("component.searchBar.sort.mostUsed"))
				return b.users - a.users;
			else if (sortBy.value === t("component.searchBar.sort.alphabetical"))
				return a.metadata.service.localeCompare(b.metadata.service);
			return 0;
		})
		.sort(a => extension.presences.includes(a.metadata.service) ? -1 : 1);

	totalPages.value = Math.ceil(sortedPresences.length / pageSize);
	return {
		currentPage: page,
		data: sortedPresences.slice(startIndex, endIndex),
		pageSize,
		totalItems: sortedPresences.length,
	};
}

function getLinkProperties({ page = currentPage.value, search = searchTerm.value, category = selectedCategory.value }) {
	const query = { category, page, search };
	return {
		query: Object.fromEntries(Object.entries(query).filter(([, value]) => value !== "")),
	};
}

function startPage() {
	const { currentPage } = presences.value;
	const middleOffset = Math.floor(Math.min(5, totalPages.value) / 2);
	return currentPage >= totalPages.value - middleOffset
		? Math.max(2, totalPages.value - 5)
		: Math.max(2, currentPage - middleOffset);
}

watch(
	() => route.query,
	(query) => {
		handleQuery(query);
	},
);

onMounted(() => {
	handleQuery(route.query);
});
</script>

<template>
	<div>
		<StoreSearchBar v-model:sort-order="sortBy" />
		<!-- Presences Grid or Empty State -->
		<div v-if="presences.data.length === 0" class="flex justify-center items-center rounded-lg h-50">
			<div class="flex flex-col items-center justify-center p-5 text-lg text-primary-highlight">
				<FAIcon :icon="['fa', 'frown']" class="mb-2 text-3xl" />
				<p>{{ $t("page.store.noPresence") }}</p>
			</div>
		</div>
		<div v-if="presences.data.length > 0" class="items-center mt-5 flex-col flex sm:mt-10 min-h-688px">
			<div class="gap-4 grid grid-cols-[fit-content(0%)] lg:grid-cols-[repeat(2,fit-content(0%))] overflow-unset">
				<StoreCard v-for="presence in presences.data" :key="presence.metadata.service" :presence="presence" />
			</div>
			<!-- Pagination -->
			<div v-if="presences.data.length > 0" class="flex mt-5 mb-10 flex-wrap justify-center sticky z-40">
				<NuxtLink
					:to="getLinkProperties({ page: 1 })"
					:replace="true"
					prefetch
					class="page-nav-button"
					:class="{ active: 1 === presences.currentPage }"
				>
					1
				</NuxtLink>
				<NuxtLink
					v-for="i in Math.min(5, totalPages)"
					v-show="totalPages - startPage() - i > -1"
					:key="i"
					prefetch
					:to="getLinkProperties({ page: startPage() + i - 1 })"
					class="page-nav-button"
					:class="{ active: startPage() + i - 1 === presences.currentPage }"
				>
					{{ startPage() + i - 1 }}
				</NuxtLink>
				<NuxtLink
					v-if="totalPages > 1"
					:to="getLinkProperties({ page: totalPages })"
					prefetch
					:class="{ active: totalPages === presences.currentPage }"
					class="page-nav-button"
				>
					{{ totalPages }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
#filters {
	&::-webkit-scrollbar {
		width: 0.4rem;
		height: 100%;
		overflow: hidden;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 3px;
	}
}

.page-nav-button {
	font-size: 1.3rem;
	height: 3.4rem;
	width: 3.4rem;
}

.page-nav-button {
	color: white;
	font-weight: 600;
	background-color: #2e3242;
	border-radius: 10vw;
	border: none;
	margin: 0.2rem;
	transition: background-color 150ms;
	display: flex;
	justify-content: center;
	align-items: center;
}
.page-nav-button:hover {
	background-color: #373b4f;
}
.page-nav-button.active {
	transition: background-color 400ms;
	background-color: #7289da;
}

.dropdown-enter-active,
.dropdown-leave-active {
	transition:
		opacity 0.1s ease,
		transform 0.1s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
