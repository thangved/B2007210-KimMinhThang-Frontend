import { createWebHistory, createRouter } from "vue-router";

import ContactBook from "../pages/ContactBook.vue";

const routes = [
	{
		path: "/",
		name: "contactbook",
		component: ContactBook,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
