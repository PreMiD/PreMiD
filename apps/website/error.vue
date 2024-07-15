<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
	error: NuxtError;
}>();

const { t } = useI18n();

const localePath = useLocalePath();

const errorMessage = computed(() => {
	switch (error.statusCode) {
		case 404:
			return t("error.404.message");
		case 500:
			return t("error.500.message");
		default:
			return t("error.default.message");
	}
});

const errorTitle = computed(() => {
	switch (error.statusCode) {
		case 404:
			return t("error.404.title");
		case 500:
			return t("error.500.title");
		default:
			return t("error.default.title");
	}
});
</script>

<template>
	<NuxtLayout>
		<div class="flex justify-center items-center h-full">
			<div class="max-w-screen-lg mx5">
				<div class="text-center">
					<h1 class="font-extrabold text-4xl">
						{{ errorTitle }}
					</h1>
					<p class="text-lg mb-8">
						{{ errorMessage }}
					</p>
					<NuxtLink :to="localePath('/')" class="b-none font-size-4 font-bold px-6 rounded-full shadow-lg transition-colors cursor-pointer bg-white text-black py-3 hover:bg-light-900">
						{{ $t("error.default.button") }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
