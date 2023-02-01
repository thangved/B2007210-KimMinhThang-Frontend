import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import "dayjs/locale/vi";
import dayjs from "dayjs";
dayjs.locale("vi");

import App from "@/App.vue";
import "@/assets/main.css";
import router from "@/router";

const app = createApp(App);

app.use(router);
app.mount("#app");
