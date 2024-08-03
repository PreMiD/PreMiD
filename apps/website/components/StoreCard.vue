<script setup lang="ts">
import tinycolor from "tinycolor2";
import { ref } from "vue";

import type { PresencesQuery } from "#gql";
import { useExtensionStore } from "~/stores/useExtension";

const { presence } = defineProps<{
	presence: PresencesQuery["presences"][number];
}>();

const extension = useExtensionStore();

const hovered = ref(false);
const color = {
	main: presence.metadata.color,
	shadow: tinycolor(presence.metadata.color).darken(30).toHexString(),
	shadowTint: tinycolor(presence.metadata.color).darken(65).toHexString(),
	text:
tinycolor(presence.metadata.color).getLuminance() > 0.95
	? "#232323"
	: "#fdfdfd",
	tint: tinycolor(presence.metadata.color).darken(45).toHexString(),
};

const router = useRouter();
const localePath = useLocalePath();
function goToPresence() {
	router.push(localePath(`/store/${presence.metadata.service}`));
}

const hasPresence = computed(() => extension.presences.includes(presence.metadata.service));
</script>

<template>
	<div
		class="select-none cursor-pointer relative overflow-hidden rounded-lg shadow-md w-20 w-90 h-40"
		:aria-label="presence.metadata.service"
		@mouseover="hovered = true"
		@mouseleave="hovered = false"
	>
		<div class="w-full absolute h-full top-0 left-0 z-1" @click="goToPresence" />

		<img
			format="webp"
			:draggable="false"
			class="absolute top-50% left-50% translate--50% opacity-20 bgBounce" :class="[hovered ? 'rotate--10 scale-130' : 'scale-105']"
			:src="presence.metadata.thumbnail"
			:alt="presence.metadata.service"
			width="360px"
		>

		<div
			class="rounded-lg flex h-full"
			:style="`background: linear-gradient(135deg, ${color.main} 0%, ${color.tint} 100%); `"
		>
			<img
				format="webp"
				draggable="false"
				class="w-16 h-16 z-20 card-shadow rounded-md my-a mx-7"
				:src="presence.metadata.logo"
				:alt="presence.metadata.service"
				width="64px"
				height="64px"
				@click="goToPresence"
			>
			<div
				class="relative my-a z-20 transition-color text-3 mr-4 text-color font-50 w-6/9"
			>
				<h1
					class="card-shadow font-bold overflow-hidden text-ellipsis text-nowrap text-xl"
					@click="goToPresence"
				>
					{{ presence.metadata.service }}
				</h1>
				<Transition name="card-animation" mode="out-in">
					<div :key="`${presence.metadata.service}_desc`">
						<p v-if="!hovered || !extension.hasExtension" class="card-shadow h-10 font-normal line-clamp-3 line-height-3.5">
							{{ presence.metadata.description.en }}
						</p>
						<div v-else-if="hovered && extension.hasExtension" class="flex gap-2">
							<button
								v-if="!hasPresence"
								class="gap-2 flex items-center justify-center h-10 cursor-pointer font-bold rounded-full transition-colors bg-primary hover:bg-primary-highlight text-white border-none w-min min-w-25"
								@click="extension.addPresence(presence.metadata.service)"
							>
								<FAIcon class="h5 w5" icon="fa-solid fa-plus" />
								<p>
									{{ $t("component.storeCard.addPresence") }}
								</p>
							</button>
							<button v-else class="gap-2 flex items-center justify-center h-10 cursor-pointer font-bold rounded-full transition-colors text-white border-none min-w-25 w-min bg-red hover:bg-red-3" @click="extension.removePresence(presence.metadata.service)">
								<FAIcon class="h5 w5" icon="fa-solid fa-times" />
								<p>
									{{ $t("component.storeCard.removePresence") }}
								</p>
							</button>
							<!-- <button
								class="rounded-full text-white h-10 border-none gap-2 flex items-center justify-center w-10 cursor-pointer transition-colors bg-red hover:bg-red-3"
							>
								<FAIcon class="h5 w5" icon="fa-solid fa-heart" />
							</button> -->
						</div>
					</div>
				</Transition>
			</div>
			<div
				class="text-color absolute flex gap-2 mr-2 right-0 flex-col op-50 shadow-tint mt-2"
			>
				<!-- <p>
					{{ Math.round(presence.users / 5) }}
					<FAIcon class="h-4 w-4" icon="fa-sold fa-bolt" />
				</p> -->
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-shadow {
	filter: drop-shadow(0 0 0.3rem var(--shadow));
}
.shadow-tint {
	filter: drop-shadow(0 0 0.3rem var(--shadowTint));
}

.text-color {
	color: var(--text);
}

.card-animation-enter-active {
	transition: all 200ms cubic-bezier(0.26, 0.08, 0, 0.97);
}

.card-animation-leave-active {
	transition: all 0ms ease;
}

.card-animation-enter,
.card-animation-leave-to {
	transform: translateY(25%) scaleY(0.85);
	opacity: 0 !important;
}

.bgBounce {
	transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
