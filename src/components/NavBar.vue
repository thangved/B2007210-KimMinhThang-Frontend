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
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse"
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
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	components: {},
};
</script>
