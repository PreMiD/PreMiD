<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["continue"]);

const visible = ref(false);

const showButton = ref(false);

let interval: number;

watch(visible, () => {
	if (visible.value) {
		showButton.value = false;
		interval = window.setTimeout(() => {
			showButton.value = !showButton.value;
		}, 10000);
	}
	else {
		window.clearTimeout(interval);
	}
});

useHead({
	htmlAttrs: computed(() => ({
		class: visible.value ? "overflow-hidden" : "",
	})),
});

function continueButton() {
	visible.value = false;
	emit("continue");
}

defineExpose({
	visible,
});
</script>

<template>
	<Transition name="fade">
		<div v-if="visible" class="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-9999">
			<div class="shadow-lg relative bg-gray w-full rounded-lg bg-gray-800 p-6 max-w-md">
				<button class="cursor-pointer transition-colors absolute bg-transparent border-none top-4 right-4 text-text hover:text-red" @click="visible = false">
					<FAIcon icon="fa-solid fa-times" class="h-5 w-5" />
				</button>
				<div class="text-center">
					<h1 class="font-extrabold text-2xl text-primary mb-4">
						{{ $t("component.donationModal.title") }}
					</h1>
					<p class="mb-4 text-lg text-gray-300">
						{{ $t("component.donationModal.description") }}
					</p>
					<div class="flex items-center justify-center mb-6">
						<div class="grid grid-cols-2">
							<a href="https://www.patreon.com/Timeraa" target="_blank" class="flex items-center justify-center font-bold rounded-full text-white h12.5 bg-orange-500 py-2 px-4 m-2 hover:bg-orange-600 transition duration-300 inline-block">
								<FAIcon icon="fa-brands fa-patreon" class="mr-2 h5" /> {{ $t("component.donationModal.patreon", { name: "Patreon" }) }}
							</a>
							<a href="https://github.com/sponsors/PreMiD" target="_blank" class="h12.5 bg-black font-bold text-white rounded-full py-2 px-4 m-2 transition duration-300 inline-block flex items-center justify-center cursor-pointer hover:bg-op-80">
								<FAIcon icon="fa-brands fa-github" class="mr-2 h5" /> {{ $t("component.donationModal.github", { name: "GitHub" }) }}
							</a>
						</div>
					</div>
					<p v-if="!showButton" class="text-gray-400">
						{{ $t("component.donationModal.holdTight") }}
					</p>
					<button v-if="showButton" class="cursor-pointer text-white rounded-full py-2 transition duration-300 font-size-4 px-6 bg-primary hover:bg-primary-highlight font-semibold outline-none b-solid b-transparent" @click="continueButton">
						{{ $t("component.donationModal.continue") }}
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
