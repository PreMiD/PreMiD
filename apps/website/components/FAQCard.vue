<script lang="ts" setup>
const { question, answer } = defineProps<{
	question: string;
	answer: string;
}>();
</script>

<template>
	<div class="">
		<h2 class="font-extrabold font-size-5 pb-1">
			{{ question }}
		</h2>
		<p class="font-size-4 c-text lt-sm:font-size-4.5">
			{{ answer }}
		</p>
	</div>
</template>
