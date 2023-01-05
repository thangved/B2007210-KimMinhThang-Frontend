import appConfig from "../configs/app.config";

const token = {
	get() {
		return window?.localStorage.getItem(
			appConfig.accessTokenName
		);
	},
	set(accessToken) {
		window?.localStorage.setItem(
			appConfig.accessTokenName,
			accessToken
		);
	},
};

export default token;
