<template>
	<div class="d-flex flex-column align-items-center">
		<h2>Đăng ký</h2>
		<register-form />
	</div>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";

export default {
	components: { RegisterForm },
};
</script>
