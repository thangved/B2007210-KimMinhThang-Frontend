<template>
	<h2 class="title">
		Danh bạ <i class="fa-solid fa-address-book"></i>
	</h2>

	<ul class="list-group">
		<li
			class="list-group-item list-group-item-action"
			v-for="(contact, index) in contacts"
			:class="{ active: index === activeIndex }"
			:key="index"
			@click="updateActiveIndex(index)"
		>
			{{ contact.name }}
		</li>
	</ul>
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
