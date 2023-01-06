<template>
	<div class="d-flex flex-column align-items-center">
		<h2>Đăng nhập</h2>
		<login-form
			@submit="handleLogin"
			class="card border p-4"
		/>
	</div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import store from "@/store";

export default {
	components: { LoginForm },
	data() {
		if (store.authed) {
			this.$router.push({ name: "contactbook" });
		}
		return {};
	},

	methods: {
		async handleLogin(loginForm) {
			try {
				await store.login(loginForm);
				this.$router.push({ name: "contactbook" });
			} catch (error) {
				alert(error.message);
			}
		},
	},
};
</script>
