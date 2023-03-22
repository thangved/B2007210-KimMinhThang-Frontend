<template>
	<h4>
		Danh bạ <i class="fa-solid fa-address-book"></i>
	</h4>

	<ul v-if="contacts.length" class="list-group">
		<li
			class="list-group-item list-group-item-action d-flex align-items-center"
			v-for="(contact, index) in contacts"
			:class="{ active: index === activeIndex }"
			:key="index"
			@click="updateActiveIndex(index)"
		>
			<span class="flex-grow-1">
				{{ contact.name }}
			</span>
			<span v-if="contact.favorite">
				<i
					class="fa-solid fa-heart text-danger"
				></i>
			</span>
		</li>
	</ul>

	<div v-else class="alert alert-warning p-2 text-center">
		<i class="fa-solid fa-triangle-exclamation"></i>
		Không có liên hệ để hiển thị
	</div>
</template>

<script>
export default {
	props: {
		contacts: { default: [] },
		activeIndex: { type: Number, default: -1 },
	},
	emits: ["update:activeIndex"],
	methods: {
		updateActiveIndex(index) {
			this.$emit("update:activeIndex", index);
		},
	},
};
</script>
