<template>
	<app-header />
	<div class="container mt-4">
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AuthService from "./services/auth.service";
import store from "./store";

export default {
	data() {
		AuthService.auth()
			.then((res) => {
				store.userInfor = res.data.data;
			})
			.catch(() => {
				this.$router.push({ name: "login" });
				store.authed = false;
			});
	},
	components: { AppHeader },
};
</script>

<style></style>
