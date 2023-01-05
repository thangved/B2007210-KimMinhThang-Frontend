<template>
	<vee-form
		@submit="submit"
		:validation-schema="contactFormScheme"
		@invalid-submit="validate"
	>
		<div class="mb-3">
			<label for="name" class="form-label">Tên</label>
			<field
				class="form-control"
				id="name"
				name="name"
				v-model="localContact.name"
				autofocus
				:class="{ 'is-invalid': error.name }"
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
				:class="{ 'is-invalid': error.email }"
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
				:class="{ 'is-invalid': error.address }"
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
				:class="{ 'is-invalid': error.phone }"
			/>
			<error-message
				name="phone"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3 form-check">
			<field
				type="checkbox"
				class="form-check-input"
				id="favorite"
				name="favorite"
				:class="{ 'is-invalid': error.favorite }"
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
	</vee-form>
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
		});

		return {
			localContact: this.contact,
			contactFormScheme,
			error: {},
		};
	},
	methods: {
		submit() {
			this.$emit("submit:contact", this.localContact);
		},
		onDelete() {
			this.$emit("delete:contact");
		},
		validate() {
			try {
				this.contactFormScheme.validateSync(
					this.localContact
				);
				this.error = {};
			} catch (error) {
				this.error = {
					[error.path]: true,
				};
			}
		},
	},
};
</script>
