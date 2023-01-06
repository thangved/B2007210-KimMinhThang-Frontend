<template>
	<search-contact v-model:modelValue="textSearch" />
	<div class="row">
		<div class="col col-12 col-md-6 col-lg-8">
			<contact-list
				:contacts="filteredContacts"
				v-model:activeIndex="activeIndex"
			/>
			<div
				class="d-flex justify-content-between flex-wrap"
			>
				<div
					class="btn btn-outline-dark mt-2 btn-sm"
					v-if="activeIndex !== -1"
					@click="gotoEditPage"
				>
					<i class="fa-solid fa-pen"></i>
					Chỉnh sửa
				</div>

				<div
					class="btn btn-primary mt-2 btn-sm"
					@click="refreshContactList"
				>
					<i class="fa-solid fa-rotate-left"></i>
					Làm mới
				</div>
				<router-link
					to="/new"
					class="btn btn-success mt-2 btn-sm"
				>
					<i class="fa-solid fa-plus"></i> Thêm
					mới
				</router-link>
				<div
					class="btn btn-danger mt-2 btn-sm"
					data-bs-toggle="modal"
					data-bs-target="#deleteAllModal"
				>
					<i class="fa-solid fa-trash"></i> Xóa
					tất cả
				</div>
			</div>
			<div class="p-4"></div>
		</div>
		<div class="col col-12 col-md-6 col-lg-4">
			<contact-card
				:contactInfo="filteredContacts[activeIndex]"
			/>
		</div>
	</div>

	<div
		class="modal fade"
		id="deleteAllModal"
		tabindex="-1"
	>
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
					Bạn muốn xóa tất cả liên hệ?
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
						@click="deleteAll"
					>
						Xóa
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ContactService from "@/services/contact.service";
import store from "@/store";
import ContactCard from "./components/ContactCard.vue";
import ContactList from "./components/ContactList.vue";
import SearchContact from "./components/SearchContact.vue";

export default {
	name: "ContackBook",
	components: { SearchContact, ContactList, ContactCard },

	data() {
		if (!store.authed && store.logged) {
			this.$router.push({ name: "login" });
		}
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

		compareContactWithString(contact, str) {
			const contactString = Object.keys(contact)
				.map((key) => contact[key])
				.join("")
				.toUpperCase();

			return contactString.includes(
				String(str).toUpperCase()
			);
		},
	},
	computed: {
		filteredContacts() {
			return this.contacts.filter((e) =>
				this.compareContactWithString(
					e,
					this.textSearch
				)
			);
		},
	},
	mounted() {
		this.refreshContactList();
	},
};
</script>
