<script setup lang="ts">
import type { ContributorsQuery } from "#gql";

const { string, contributors } = defineProps<{
	string: string;
	contributors: NonNullable<ContributorsQuery["credits"]>;
}>();
</script>

<template>
	<div class="justify-center my-10">
		<h1 class="font-extrabold color-primary font-size-10 mb-5">
			{{ $t(string) }}
		</h1>
		<div class="inline-flex flex-wrap gap-3">
			<ContributorCard
				v-for="(item, i) in contributors"
				:key="i"
				:user="item"
			/>
		</div>
	</div>
</template>
