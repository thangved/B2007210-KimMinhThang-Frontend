import request from "../utils/request";

class AuthService {
	static async login(payload) {
		return await request.post("/auth/login", payload);
	}
}

export default AuthService;
