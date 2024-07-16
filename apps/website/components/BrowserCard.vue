<script lang="ts" setup>
const { browser } = defineProps<{
	browser: string;
	highlight?: boolean;
}>();

const emit = defineEmits(["click"]);

const isWIP = ref(false);

function getIcon(browser: string) {
	switch (browser) {
		case "Safari":
			isWIP.value = true;
			return "fa-brands fa-safari";
		case "Edge":
			return "fa-brands fa-edge";
		case "Firefox":
			return "fa-brands fa-firefox";
		case "Opera":
			return "fa-brands fa-opera";
		case "Brave":
			return "fa-brands fa-brave";
		case "Chrome":
			return "fa-brands fa-chrome";
		default:
			return ["fa-brands fa-chrome", "fa-brands fa-brave", "fa-brands fa-opera", "fa-brands fa-edge"];
	}
}

let iconUpdateInterval: number | undefined;
const iconIndex = ref<number>(0);

const currentIcon = computed(() => {
	if (!Array.isArray(getIcon(browser)))
		return getIcon(browser);

	return getIcon(browser)[iconIndex.value];
});

onMounted(() => {
	if (typeof getIcon(browser) === "string")
		return;

	iconIndex.value = 0;
	iconUpdateInterval = window.setInterval(() => {
		iconIndex.value = (iconIndex.value + 1) % getIcon(browser).length;
		if (iconIndex.value >= getIcon(browser).length) {
			iconIndex.value = 0;
		}
	}, 1000);
});

onBeforeUnmount(() => {
	clearInterval(iconUpdateInterval);
});
</script>

<template>
	<ClientOnly>
		<VTooltip :disabled="!isWIP">
			<div class="flex items-center cursor-pointer font-bold transition-colors relative bg-gray select-none gap-2 px5 border-rounded w-50 h-20" :class="[highlight && !isWIP ? 'bg-primary hover:bg-primary-highlight c-black' : '', isWIP ? 'bg-op-60 cursor-not-allowed' : 'hover:bg-primary']" @click="!isWIP && emit('click')">
				<FAIcon
					class="mr-2 h-auto w-7"
					:icon="currentIcon"
				/>
				<span>
					{{ browser }}
				</span>
				<span v-if="isWIP" class="rounded-full absolute text-ellipsis overflow-hidden py-1 whitespace-nowrap top--2 right--2 bg-red-500 px-2 max-w-25 max-h-7">
					{{ $t("component.browserCard.wip") }}
				</span>
			</div>
			<template #popper>
				{{ $t("component.browserCard.support.safari") }}
			</template>
		</VTooltip>
	</ClientOnly>
</template>
