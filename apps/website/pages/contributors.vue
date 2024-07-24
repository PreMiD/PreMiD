<script lang="ts" setup>
const { data, error } = await useAsyncGql({ operation: "contributors" });

const filteredData = computed(() => {
	return data.value?.credits ?? [];
});
const staff = computed(() => {
	return (
		filteredData.value
			?.filter(item =>
				[
					//* Project Management
					"673682085608816652",
					//* Moderator
					"514546359865442304",
					//* Support
					"566417964820070421",
				].includes(item?.user?.roleId || ""),
			)
			.sort(sortContributors) || []
	);
});
const supporters = computed(() => {
	return (
		filteredData.value
			?.filter(item =>
				[
					//* Contributor
					"1032759805732978708",
					//* Supporter
					"515874214750715904",
					//* Booster
					"585532751663333383",
					//* Donator
					"502165799172309013",
				].includes(item?.user?.roleId || ""),
			)
			.sort(sortContributors) || []
	);
});
const presenceDevelopers = computed(() => {
	return (
		filteredData.value
			?.filter(item =>
				[
					//* Presence Developer
					"606222296016879722",
				].includes(item?.user?.roleId || ""),
			)
			.sort(sortContributors) || []
	);
});
const translators = computed(() => {
	return (
		filteredData.value
			?.filter(item =>
				[
					//* Proofreader
					"522755339448483840",
					//* Translator
					"502148045991968788",
				].includes(item?.user?.roleId || ""),
			)
			.sort(sortContributors) || []
	);
});

function sortContributors(
	a: any,
	b: any,
) {
	if (a?.user?.rolePosition === b?.user?.rolePosition)
		return a?.user?.name.localeCompare(b?.user?.name);

	return b?.user?.rolePosition - a?.user?.rolePosition;
}

const { t } = useI18n();

useSeoMeta({
	title: t("page.contributors.title"),
});
</script>

<template>
	<div class="flex justify-center mx-5">
		<div class="max-w-400">
			<div v-if="!error">
				<ContributorSection
					v-once
					string="page.contributors.staff"
					:contributors="staff"
				/>
				<ContributorSection
					v-once
					string="page.contributors.supporters"
					:contributors="supporters"
				/>
				<ContributorSection
					v-once
					string="page.contributors.presenceDevelopers"
					:contributors="presenceDevelopers"
				/>
				<ContributorSection
					v-once
					string="page.contributors.translators"
					:contributors="translators"
				/>
			</div>
			<div v-else>
				<h1 class="color-primary font-discord font-size-8 mb-2">
					Error
				</h1>
				<p>{{ error }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
