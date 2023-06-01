import { defineAsyncComponent } from "vue";

export function registerGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/AuthLayout"))
  );
  app.component(
    "defaul-layout",
    defineAsyncComponent(() => import("@/layouts/DefaultLayout"))
  );
}
