<template>
	<h2>Tạo liên hệ mới</h2>
	<contact-form
		@submit:contact="handleCreate"
		:contact="{}"
	/>
</template>

<script>
import ContactForm from "../../components/ContactForm.vue";
import ContactService from "../../services/contact.service";

export default {
	components: { ContactForm },
	methods: {
		async handleCreate(contact) {
			try {
				await ContactService.create(contact);
				this.$router.push({ name: "contactbook" });
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
