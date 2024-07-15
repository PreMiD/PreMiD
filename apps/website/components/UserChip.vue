<script lang="ts" setup>
const { id } = defineProps<{ id: string }>();

const { data, status } = await useAsyncGql({ operation: "fetchUserChip", variables: { id } });

const userAvatar = computed(() => {
	const avatar = data.value.credits?.[0]?.user?.avatar;
	if (status.value !== "success" || !avatar)
		return;

	return `${avatar}?size=24`;
});

const username = computed(() => {
	if (status.value !== "success")
		return;
	return data.value.credits?.[0]?.user?.name;
});

const userColor = computed(() => {
	if (status.value !== "success")
		return "#fff";
	return data.value.credits?.[0]?.user?.roleColor ?? "#fff";
});

const localePath = useLocalePath();
</script>

<template>
	<span v-bind="$attrs">
		<NuxtLink :to="localePath(`/users/${id}`)" class="flex items-center gap-2">
			<template v-if="status === 'success' && username">
				<NuxtImg
					class="rounded-full h-6 w-6"
					:src="userAvatar"
					alt="User avatar"
				/>
				<p
					class="font-bold" :style="{
						color: userColor,
					}"
				>
					{{ username }}
				</p>
			</template>
			<template v-else-if="status === 'pending'">
				<p class="c-text">
					{{ $t("component.userChip.loading") }}
				</p>
			</template>
			<template v-else>
				<p class="c-text">
					{{ id }}
				</p>
			</template>
		</NuxtLink>
	</span>
</template>
