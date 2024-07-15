<script lang="ts" setup>
import tinycolor from "tinycolor2";
import type { ContributorsQuery } from "#gql";

type ContributorType = NonNullable<ContributorsQuery["credits"]>[number];

const { user } = defineProps<{ user: ContributorType }>();

const hovered = ref(false);

// eslint-disable-next-line one-var
const cardGradientColor = computed(() => {
		return {
			primary: tinycolor(user?.user?.roleColor ?? "")
				.setAlpha(1)
				.darken(5)
				.toRgbString(),
			secondary: tinycolor(user?.user?.roleColor ?? "")
				.analogous()[2]
				.setAlpha(0.5)
				.saturate(20)
				.toRgbString(),
		};
	}),
	cardShadowColor = computed(() =>
		hovered.value
			? tinycolor(cardGradientColor.value.primary)
				.setAlpha(0.3)
				.saturate(20)
				.toRgbString()
			: "transparent",
	),
	computedBackground = computed(() => {
		return `background: linear-gradient(-35deg, ${cardGradientColor.value.secondary} 20%, ${cardGradientColor.value.primary} 130%); box-shadow: 0 2px 52px 0 ${cardShadowColor.value}`;
	});
</script>

<template>
	<div
		class="flex items-center select-none py-1 duration-200 justify-between h-17 w-60 rd-2 px-3 transition-all hover:translate-y--1.5"
		:style="computedBackground"
		@mouseover="hovered = true"
		@mouseleave="hovered = false"
	>
		<div class="grid gap-1">
			<h1 class="text-ellipsis overflow-hidden whitespace-nowrap font-size-4.5 font-800">
				{{ user?.user?.name }}
			</h1>
			<p class="font-bold color-white:70 font-size-3.5">
				{{ user?.user?.role }}
			</p>
		</div>
		<div class="relative ml2">
			<NuxtImg
				v-if="user?.user?.avatar"
				:src="`${user?.user?.avatar}?size=40`"
				class="h-auto w-10 min-w-10 rd-100"
				draggable="false"
				:alt="`${user?.user?.name}'s avatar`"
			>
				<span
					class="rd-100 absolute block right-0 border-solid bg-green h-2.5 w-2.5 bottom-0 border-1 border-black"
				/>
			</nuxtimg>
		</div>
	</div>
</template>
