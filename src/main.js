import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// add these before Vue is instantiated

createApp(App)
  .use(router)
  .mount("#app");
