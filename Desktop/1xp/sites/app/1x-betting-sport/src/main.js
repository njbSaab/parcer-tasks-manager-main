import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import router from "./router/index.js";

// Создаём экземпляр Vue-приложения
const app = createApp(App);

// Создаём экземпляр Pinia
const pinia = createPinia();
// Подключаем плагины
app.use(pinia);
app.use(autoAnimatePlugin);
app.use(router);

console.log("Pinia:", pinia);

// Монтируем приложение
app.mount("#app");
