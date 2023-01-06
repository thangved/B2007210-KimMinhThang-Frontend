<template>
	<nav
		class="navbar bg-dark navbar-expand-lg"
		data-bs-theme="dark"
	>
		<div class="container">
			<router-link
				class="navbar-brand text-light"
				to="/"
			>
				Ứng dụng quản lý danh bạ
			</router-link>
			<button
				class="navbar-toggler text-light"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="fa-solid fa-bars"></i>
			</button>
			<div
				class="collapse navbar-collapse flex justify-content-between"
				id="navbarNav"
			>
				<ul class="navbar-nav">
					<li class="nav-item">
						<router-link
							class="nav-link active text-light"
							aria-current="page"
							to="/"
						>
							Danh bạ
							<i
								class="fa-solid fa-address-book"
							></i>
						</router-link>
					</li>
				</ul>

				<ul class="navbar-nav" v-if="!store.authed">
					<router-link
						class="btn btn-sm text-light"
						:to="{ name: 'login' }"
					>
						Đăng nhập
					</router-link>
					<router-link
						class="btn btn-outline-light btn-sm"
						:to="{ name: 'register' }"
					>
						Đăng ký
					</router-link>
				</ul>

				<ul class="navbar-nav" v-else>
					<span class="text-light text-sm p-1">{{
						store.userInfor.username
					}}</span>
					<button
						class="btn btn-outline-light btn-sm"
						data-bs-target="#logoutModal"
						data-bs-toggle="modal"
					>
						Đăng xuất
					</button>
				</ul>
			</div>
		</div>
	</nav>

	<div class="modal fade" id="logoutModal" tabindex="-1">
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
					Bạn muốn đăng xuất?
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
						@click="logout"
					>
						Đăng xuất
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import store from "@/store";
import authService from "@/services/auth.service";

export default {
	data() {
		return {
			store,
		};
	},
	methods: {
		logout() {
			authService.logout();
			this.$router.push({ name: "login" });
		},
	},
};
</script>
