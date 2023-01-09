<template>
	<vee-form
		@submit="submit"
		:validation-schema="contactFormScheme"
		@invalid-submit="validate"
		class="card border p-4"
	>
		<div class="mb-3">
			<label for="name" class="form-label">Tên</label>
			<field
				class="form-control"
				id="name"
				name="name"
				v-model="localContact.name"
				autofocus
				:class="{ 'is-invalid': errors.name }"
			/>
			<error-message
				name="name"
				class="invalid-feedback"
			/>
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">
				Email
			</label>
			<field
				type="email"
				class="form-control"
				id="email"
				name="email"
				v-model="localContact.email"
				:class="{ 'is-invalid': errors.email }"
			/>
			<error-message
				name="email"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3">
			<label for="address" class="form-label">
				Địa chỉ
			</label>
			<field
				class="form-control"
				id="address"
				name="address"
				v-model="localContact.address"
				:class="{ 'is-invalid': errors.address }"
			/>
			<error-message
				name="address"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3">
			<label for="phone" class="form-label">
				Điện thoại
			</label>
			<field
				type="tel"
				class="form-control"
				id="phone"
				name="phone"
				v-model="localContact.phone"
				:class="{ 'is-invalid': errors.phone }"
			/>
			<error-message
				name="phone"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3 form-check">
			<input
				type="checkbox"
				class="form-check-input"
				id="favorite"
				name="favorite"
				:class="{ 'is-invalid': errors.favorite }"
				v-model="localContact.favorite"
			/>
			<error-message
				name="favorite"
				class="invalid-feedback"
			/>
			<label class="form-check-label" for="favorite">
				Liên hệ yêu thích
			</label>
		</div>
		<div>
			<button type="submit" class="btn btn-primary">
				<i class="fa-solid fa-save"></i> Lưu
			</button>
			<button
				v-if="showDelete"
				type="button"
				class="btn btn-danger m-2"
				data-bs-toggle="modal"
				data-bs-target="#deleteModal"
			>
				<i class="fa-solid fa-trash"></i> Xóa
			</button>
		</div>
	</vee-form>
	<div class="modal fade" id="deleteModal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5">
						Đăng xuất
					</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
					></button>
				</div>
				<div class="modal-body">
					Bạn muốn xóa liên hệ?
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						Hủy
					</button>
					<button
						type="button"
						class="btn btn-danger"
						data-bs-dismiss="modal"
						@click="onDelete"
					>
						Xóa
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {
	ErrorMessage,
	Field,
	Form as VeeForm,
} from "vee-validate";
import * as yup from "yup";

export default {
	props: {
		contact: { required: true },
		showDelete: { type: Boolean, default: false },
	},
	components: { VeeForm, Field, ErrorMessage },
	emits: ["submit:contact", "delete:contact"],
	data() {
		const contactFormScheme = yup.object().shape({
			name: yup
				.string()
				.required("Tên liên hệ là bắt buộc!"),
			email: yup.string().email("Email không hợp lệ"),
			address: yup.string(),
			phone: yup.string(),
			favorite: yup.boolean(),
		});

		return {
			localContact: this.contact,
			contactFormScheme,

			errors: {},
		};
	},
	methods: {
		submit() {
			console.log(this.localContact);
			this.$emit("submit:contact", this.localContact);
		},
		onDelete() {
			this.$emit("delete:contact");
		},
		validate(event) {
			this.errors = event.errors;
		},
	},
};
</script>
