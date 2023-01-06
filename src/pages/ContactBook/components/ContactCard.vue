<template>
	<h2 class="mb-4">
		Chi tiết liên hệ
		<i class="fa-solid fa-address-card"></i>
	</h2>

	<dl v-if="contactInfo" class="row">
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
			>
			</i>
			<i v-else class="fa-solid x-mark"></i>
		</dd>

		<dt class="col-sm-4">Ngày tạo</dt>
		<dd class="col-sm-8">
			<i>
				{{
					moment(contactInfo.createdAt).calendar()
				}}
			</i>
		</dd>

		<dt class="col-sm-4">Chỉnh sửa lần cuối</dt>
		<dd class="col-sm-8">
			<i>
				{{
					moment(contactInfo.updatedAt).calendar()
				}}
			</i>
		</dd>
	</dl>
	<span v-else class="alert alert-primary p-2">
		Vui lòng chọn một liên hệ để hiển thị
	</span>
</template>

<script>
import moment from "moment";

export default {
	props: ["contactInfo"],
	data() {
		return { moment };
	},
};
</script>
