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

				<ul class="navbar-nav" v-if="!authed">
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
						userInfor.username
					}}</span>
					<button
						class="btn btn-outline-light btn-sm"
					>
						Đăng xuất
					</button>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import store from "../store";

export default {
	components: {},
	data() {
		return {
			authed: store.authed,
			userInfor: store.userInfor,
		};
	},
};
</script>
