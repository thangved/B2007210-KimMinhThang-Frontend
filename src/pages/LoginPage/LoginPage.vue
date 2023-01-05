<template>
	<h2>Đăng nhập</h2>
	<login-form @submit="handleLogin" />
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import AuthService from "../../services/auth.service";
import token from "../../utils/token";

export default {
	components: { LoginForm },
	methods: {
		async handleLogin(loginForm) {
			try {
				const res = await AuthService.login(
					loginForm
				);

				token.set(res.data.accessToken);

				this.$router.push({ name: "contactbook" });
			} catch (error) {
				alert(error.response.data.message);
			}
		},
	},
};
</script>
