import request from "@/utils/request";

class ContactService {
	static async create(payload) {
		return await request.post("/contacts", payload);
	}
	static async getAll() {
		return await request.get("/contacts");
	}
	static async deleteAll() {
		return await request.delete("/contacts");
	}
	static async getById(id) {
		return await request.get(`/contacts/${id}`);
	}
	static async update(id, payload) {
		return await request.put(
			`/contacts/${id}`,
			payload
		);
	}
	static async deleteById(id) {
		return await request.delete(`/contacts/${id}`);
	}
}

export default ContactService;
