import { createWebHistory, createRouter } from "vue-router";

import ContactBook from "../pages/ContactBook/ContactBook.vue";
import NewContact from "../pages/NewContact/NewContact.vue";
import EditContact from "../pages/EditContact/EditContact.vue";

const routes = [
	{
		path: "/",
		name: "contactbook",
		component: ContactBook,
	},
	{
		path: "/new",
		name: "new_contact",
		component: NewContact,
	},
	{
		path: "/edit/:id",
		name: "edit_contact",
		component: EditContact,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
