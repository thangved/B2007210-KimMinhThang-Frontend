<template>
	<div v-if="contact">
		<h2>Chỉnh sửa liên hệ</h2>
		<contact-form
			:contact="contact"
			show-delete
			@submit:contact="handleUpdate"
			@delete:contact="handleDelete"
		/>
	</div>
</template>

<script>
import ContactForm from "../../components/ContactForm.vue";
import ContactService from "../../services/contact.service";

export default {
	components: { ContactForm },
	data() {
		return { contact: null };
	},
	methods: {
		async fetchData() {
			try {
				this.contact = (
					await ContactService.getById(
						this.$route.params.id
					)
				).data;
			} catch (error) {
				console.log(error);
			}
		},
		async handleUpdate(payload) {
			try {
				await ContactService.update(
					this.contact._id,
					payload
				);
				this.$router.push({ name: "contactbook" });
			} catch (error) {
				console.log(error);
			}
		},
		async handleDelete() {
			try {
				if (!confirm("Bạn muốn xóa liên hệ này?"))
					return;

				await ContactService.deleteById(
					this.contact._id
				);

				this.$router.push({ name: "contactbook" });
			} catch (error) {
				console.log(error);
			}
		},
	},
	mounted() {
		this.fetchData();
	},
};
</script>
