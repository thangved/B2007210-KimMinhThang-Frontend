<template>
	<search-contact />
	<div class="row">
		<div class="col col-sm-12 col-md-6 col-lg-8">
			<contact-list
				:contacts="contacts"
				v-model:activeIndex="activeIndex"
			/>
			<div
				class="d-flex justify-content-between flex-wrap"
			>
				<div
					class="btn btn-outline-dark mt-2"
					v-if="activeIndex !== -1"
					@click="gotoEditPage"
				>
					<i class="fa-solid fa-pen"></i>
					Chỉnh sửa
				</div>

				<div
					class="btn btn-primary mt-2"
					@click="refreshContactList"
				>
					<i class="fa-solid fa-rotate-left"></i>
					Làm mới
				</div>
				<router-link
					to="/new"
					class="btn btn-success mt-2"
				>
					<i class="fa-solid fa-plus"></i> Thêm
					mới
				</router-link>
				<div
					class="btn btn-danger mt-2"
					@click="deleteAll"
				>
					<i class="fa-solid fa-trash"></i> Xóa
					tất cả
				</div>
			</div>
		</div>
		<div class="col col-sm-12 col-md-6 col-lg-4">
			<contact-card
				v-if="contacts[activeIndex]"
				:contactInfo="contacts[activeIndex]"
			/>
		</div>
	</div>
</template>

<script>
import ContactService from "../../services/contact.service";
import ContactCard from "./components/ContactCard.vue";
import ContactList from "./components/ContactList.vue";
import SearchContact from "./components/SearchContact.vue";

export default {
	name: "ContackBook",
	components: { SearchContact, ContactList, ContactCard },
	data() {
		return {
			activeIndex: -1,
			textSearch: "",
			contacts: [],
		};
	},

	methods: {
		async refreshContactList() {
			try {
				this.contacts = await (
					await ContactService.getAll()
				).data;
				this.activeIndex = -1;
			} catch (error) {
				console.log(error);
			}
		},

		async deleteAll() {
			try {
				if (
					!confirm("Bạn muốn xóa tất cả liên hệ?")
				)
					return;
				await ContactService.deleteAll();
				this.refreshContactList();
			} catch (error) {
				console.log(error);
			}
		},

		gotoEditPage() {
			this.$router.push({
				name: "edit_contact",
				params: {
					id: this.contacts[this.activeIndex]._id,
				},
			});
		},
	},
	mounted() {
		this.refreshContactList();
	},
};
</script>
