<template>
	<app-header />
	<div class="container mt-4">
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import store from "@/store";

export default {
	components: { AppHeader },
	mounted() {
		store.fetchUserInfo();
	},
};
</script>

<style></style>
