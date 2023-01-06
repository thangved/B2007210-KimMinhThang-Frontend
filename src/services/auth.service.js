import request from "@/utils/request";
import token from "@/utils/token";
import store from "@/store";

class AuthService {
	static async login(payload) {
		return await request.post("/auth/login", payload);
	}
	static async auth() {
		return await request.get("/auth");
	}
	static async register(payload) {
		return await request.post(
			"/auth/register",
			payload
		);
	}
	static logout() {
		token.set("");
		store.authed = false;
		store.logged = false;
		store.userInfor = null;
	}
}

export default AuthService;
