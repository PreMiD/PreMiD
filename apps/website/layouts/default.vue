<script lang="ts" setup>
useHead({
	htmlAttrs: {
		class: "font-inter",
	},
});
</script>

<template>
	<Header />
	<div class="flex justify-center min-h-screen">
		<!-- <ScriptGoogleAdsense
			data-ad-client="ca-pub-1575460061917202"
			data-ad-slot="9125593977"
			data-ad-format="auto"
			:data-full-width-responsive="true"
		>
			<template #error>
				{{ $t("layout.ads.error") }}
			</template>
		</ScriptGoogleAdsense> -->
		<div class="max-w-screen-lg mx5 mt-5">
			<slot />
		</div>
	<!-- 	<ScriptGoogleAdsense
			data-ad-client="ca-pub-1575460061917202"
			data-ad-slot="5154559370"
			data-ad-format="auto"
			:data-full-width-responsive="true"
		>
			<template #error>
				{{ $t("layout.ads.error") }}
			</template>
		</ScriptGoogleAdsense> -->
	</div>
	<Footer />
</template>

<style scoped></style>
