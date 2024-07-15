<script setup lang="ts">
const route = useRoute("users-id");
const router = useRouter();

const { data, status } = await useAsyncGql("userPage", { id: route.params.id });

const user = computed(() => data.value.credits?.[0]?.user);
const presences = computed(() => [...data.value.authorPresences, ...data.value.contributorPresences]);

if (status.value === "success" && !user.value) {
	router.replace("/store");
}
</script>

<template>
	<div class="flex flex-col gap-10 w-full">
		<template v-if="user">
			<div class="flex justify-center items-center gap-3">
				<NuxtImg :src="`${user?.avatar}?size=1024`" alt="User Avatar" class="w-20 h-20 rounded-full" />
				<h1 class="font-bold text-xl">
					{{ user?.name }}
				</h1>
			</div>
			<div class="flex flex-col items-center gap-10">
				<h1 class="font-bold c-primary text-center text-10">
					{{ $t("page.users.userPage.title") }}
				</h1>
				<div class="flex flex-wrap gap-5 justify-center">
					<StoreCard v-for="presence in presences" :key="presence.metadata.service" :presence="presence" />
				</div>
			</div>
		</template>
		<template v-else>
			<div class="flex flex-col justify-center items-center gap-3">
				<h1 class="font-bold text-xl">
					{{ $t("page.users.userPage.error.title") }}
				</h1>
				<p>{{ $t("page.users.userPage.error.description") }}</p>
			</div>
		</template>
	</div>
</template>
