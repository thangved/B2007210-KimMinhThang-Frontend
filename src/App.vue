<template>
	<app-header />
	<div class="container mt-4">
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
	components: { AppHeader },
};
</script>

<style></style>
