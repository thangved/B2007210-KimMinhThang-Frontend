import axios from "axios";

import token from "../utils/token";

const request = axios.create({
	baseURL: "http://localhost:5000/api/",
	headers: {
		authorization: token.get(),
	},
});

export default request;
