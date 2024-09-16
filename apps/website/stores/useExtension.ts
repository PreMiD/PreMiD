export const useExtensionStore = defineStore("extension", () => {
	const globalInterval = ref<number>();
	const hasExtension = ref(false);
	const presences = reactive<string[]>([]);
	const eventsAdded = ref(false);

	function onGetPresenceList(event: Event) {
		if (!(event instanceof CustomEvent))
			return;

		presences.slice(0, presences.length);
		presences.push(...event.detail.toString().split(","));
	}

	function setupGlobalEvents() {
		if (import.meta.server)
			return;

		if (!eventsAdded.value) {
			window.addEventListener("PreMiD_GetWebisteFallback", onGetPresenceList);
			eventsAdded.value = true;
		}
	}

	function fetchPresences() {
		window.dispatchEvent(new CustomEvent("PreMiD_GetPresenceList"));
	}

	function addPresence(presence: string) {
		presences.push(presence);
		window.dispatchEvent(new CustomEvent("PreMiD_AddPresence", { detail: presence }));
	}

	function removePresence(presence: string) {
		const index = presences.indexOf(presence);
		if (index !== -1) {
			presences.splice(index, 1);
			window.dispatchEvent(new CustomEvent("PreMiD_RemovePresence", { detail: presence }));
		}
	}

	watch(hasExtension, (newVal) => {
		if (newVal)
			fetchPresences();
	});

	if (import.meta.client && globalInterval.value === undefined) {
		globalInterval.value = window.setInterval(() => {
			const value = document.querySelector("body[extension-ready=true]") !== null;
			if (value !== hasExtension.value) {
				clearInterval(globalInterval.value);
				hasExtension.value = true;
			}
		}, 100);
	}

	return {
		hasExtension,
		presences,
		fetchPresences,
		addPresence,
		removePresence,
		setupGlobalEvents,
	};
});
