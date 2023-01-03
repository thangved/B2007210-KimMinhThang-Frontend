<template>
	<div class="input-group mb-3">
		<input
			type="text"
			class="form-control"
			placeholder="Nhập thông tin cần tìm"
			:value="modelValue"
			@input="updateModelValue"
			@keyup.enter="submit"
		/>
		<button
			type="button"
			class="btn btn-outline-secondary input-group-text"
			@click="submit"
		>
			<i class="fa-solid fa-search"></i> Tìm kiếm
		</button>
	</div>
</template>

<script>
export default {
	props: {
		modelValue: { type: String, drfault: "" },
	},
	emits: ["submit", "update:modelValue"],
	methods: {
		updateModelValue(e) {
			this.$emits(
				"update:modelValue",
				e.event.target
			);
		},
		submit() {
			this.$emit("submit");
		},
	},
};
</script>
