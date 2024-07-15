import { addComponent, defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
	setup() {
		addComponent({
			export: "FontAwesomeIcon",
			filePath: "@fortawesome/vue-fontawesome",
			name: "FAIcon",
		});
	},
});
