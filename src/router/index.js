import { createRouter, createWebHistory } from "vue-router";

import ContactBook from "@/pages/ContactBook/ContactBook.vue";

const routes = [
	{
		path: "/",
		name: "contactbook",
		component: ContactBook,
	},
	{
		path: "/new",
		name: "new_contact",
		component: () =>
			import("@/pages/NewContact/NewContact.vue"),
	},
	{
		path: "/edit/:id",
		name: "edit_contact",
		component: () =>
			import("@/pages/EditContact/EditContact.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () =>
			import("@/pages/LoginPage/LoginPage.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () =>
			import("@/pages/RegisterPage/RegisterPage.vue"),
	},
	{
		path: "/:any",
		name: "notfound",
		component: () =>
			import("@/pages/NotFound/NotFound.vue"),
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
