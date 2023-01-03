<template>
	<form @submit.prevent="submit">
		<div class="mb-3">
			<label for="name" class="form-label">Tên</label>
			<input
				class="form-control"
				id="name"
				v-model="localContact.name"
			/>
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">
				Email
			</label>
			<input
				type="email"
				class="form-control"
				id="email"
				v-model="localContact.email"
			/>
		</div>

		<div class="mb-3">
			<label for="address" class="form-label">
				Địa chỉ
			</label>
			<input
				class="form-control"
				id="address"
				v-model="localContact.address"
			/>
		</div>

		<div class="mb-3">
			<label for="phone" class="form-label">
				Điện thoại
			</label>
			<input
				type="tel"
				class="form-control"
				id="phone"
				v-model="localContact.phone"
			/>
		</div>

		<div class="mb-3 form-check">
			<input
				type="checkbox"
				class="form-check-input"
				id="favorite"
				v-model="localContact.favorite"
			/>
			<label class="form-check-label" for="favorite">
				Liên hệ yêu thích
			</label>
		</div>
		<button type="submit" class="btn btn-primary">
			<i class="fa-solid fa-save"></i> Lưu
		</button>
		<button
			v-if="showDelete"
			type="button"
			class="btn btn-danger m-2"
			@click="onDelete"
		>
			<i class="fa-solid fa-trash"></i> Xóa
		</button>
	</form>
</template>

<script>
export default {
	props: {
		contact: { required: true },
		showDelete: { type: Boolean, default: false },
	},
	emits: ["submit:contact", "delete:contact"],
	data() {
		return { localContact: this.contact };
	},
	methods: {
		submit() {
			this.$emit("submit:contact", this.localContact);
		},
		onDelete() {
			this.$emit("delete:contact");
		},
	},
};
</script>
