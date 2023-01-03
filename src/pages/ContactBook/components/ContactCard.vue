<template>
	<h2>
		Chi tiết liên hệ
		<i class="fa-solid fa-address-card"></i>
	</h2>

	<dl class="row">
		<dt class="col-sm-4">Tên:</dt>
		<dd class="col-sm-8">{{ contactInfo.name }}</dd>

		<dt class="col-sm-4">Email</dt>
		<dd class="col-sm-8">
			{{ contactInfo.email }}
		</dd>

		<dt class="col-sm-4">Địa chỉ</dt>
		<dd class="col-sm-8">
			{{ contactInfo.address }}
		</dd>

		<dt class="col-sm-4">Điện thoại</dt>
		<dd class="col-sm-8">
			{{ contactInfo.phone }}
		</dd>

		<dt class="col-sm-4">Liên hệ yêu thích</dt>
		<dd class="col-sm-8">
			<i
				v-if="contactInfo.favorite"
				class="fa-solid fa-check"
			></i>
			<i v-else class="fa-solid x-mark"></i>
		</dd>
	</dl>
</template>

<script>
export default {
	props: ["contactInfo"],
	data() {
		return {};
	},
};
</script>
