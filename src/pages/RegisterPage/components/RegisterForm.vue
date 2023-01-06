<template>
	<vee-form
		class="card border p-4"
		:validation-schema="registerSchema"
		@invalid-submit="validate"
		@submit="register"
	>
		<div class="mb-3">
			<label for="username" class="form-label"
				>Tên đăng nhập</label
			>
			<field
				class="form-control"
				name="username"
				v-model="formData.username"
				autofocus
				:class="{ 'is-invalid': error.username }"
			/>
			<error-message
				name="username"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3">
			<label for="email" class="form-label">
				Email
			</label>
			<field
				class="form-control"
				name="email"
				type="email"
				v-model="formData.email"
				autofocus
				:class="{ 'is-invalid': error.email }"
			/>
			<error-message
				name="email"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3">
			<label for="password" class="form-label">
				Mật khẩu
			</label>
			<field
				class="form-control"
				name="password"
				type="password"
				v-model="formData.password"
				autofocus
				:class="{ 'is-invalid': error.password }"
			/>
			<error-message
				name="password"
				class="invalid-feedback"
			/>
		</div>

		<div class="mb-3">
			<label for="confirmPassword" class="form-label">
				Nhập lại mật khẩu
			</label>
			<field
				class="form-control"
				name="confirmPassword"
				type="password"
				v-model="formData.confirmPassword"
				autofocus
				:class="{
					'is-invalid': error.confirmPassword,
				}"
			/>
			<error-message
				name="confirmPassword"
				class="invalid-feedback"
			/>
		</div>

		<div>
			<button class="btn btn-primary" type="submit">
				Đăng ký
			</button>
		</div>

		<hr />

		<p>
			Bạn đã có tài khoản?
			<router-link :to="{ name: 'login' }">
				Đăng nhập ngay
			</router-link>
		</p>
	</vee-form>
</template>

<script>
import AuthService from "@/services/auth.service";
import store from "@/store";
import {
	Form as VeeForm,
	Field,
	ErrorMessage,
} from "vee-validate";
import * as yup from "yup";

export default {
	data() {
		if (store.authed)
			this.$router.push({ name: "contactbook" });

		const registerSchema = yup.object().shape({
			username: yup
				.string()
				.required("Tên đăng nhập là bắt buộc")
				.min(3, "Chiều dài tối thiểu là 3 ký tự"),
			email: yup
				.string()
				.required("Email là bắt buộc")
				.email("Email không đúng định dạng"),
			password: yup
				.string()
				.required("Mật khẩu là bắt buộc")
				.min(8, "Hãy nhập ít nhất 8 ký tự"),
			confirmPassword: yup
				.string()
				.required("Vui lòng nhập lại mật khẩu")
				.oneOf(
					[yup.ref("password")],
					"Mật khẩu nhập lại không khớp"
				),
		});
		return {
			formData: {
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
			},
			error: {},
			registerSchema,
		};
	},
	components: {
		VeeForm,
		Field,
		ErrorMessage,
	},
	methods: {
		validate() {
			try {
				this.registerSchema.validateSync(
					this.formData
				);
				this.error = {};
			} catch (error) {
				this.error = {
					[error.path]: true,
				};
			}
		},
		async register() {
			try {
				await AuthService.register(this.formData);

				await store.login(this.formData);
				this.$router({ name: "contactbook" });
			} catch (error) {
				alert(error.response.data.message);
			}
		},
	},
};
</script>
