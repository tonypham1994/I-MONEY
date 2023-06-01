import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponent } from "./untils/import";
import { auth } from "./firebase/config";

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponent(app);
    app.use(router);
    app.use(store);
    app.mount("#app");
  }
});
