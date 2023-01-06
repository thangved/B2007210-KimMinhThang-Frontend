import { reactive } from "vue";

import AuthService from "@/services/auth.service";
import token from "@/utils/token";

const store = reactive({
	userInfor: null,
	authed: false,
	logged: false,
	async login(payload) {
		try {
			const res = await AuthService.login(payload);
			token.set(res.data.accessToken);
			await this.fetchUserInfo();
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	},
	async fetchUserInfo() {
		try {
			const res = await AuthService.auth();
			this.userInfor = res.data.data;
			this.authed = true;
		} catch (error) {
			throw new Error(error.message);
		} finally {
			this.logged = true;
		}
	},
});

export default store;
