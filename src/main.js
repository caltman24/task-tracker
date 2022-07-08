// main.js is the entry point for the application.

// import the createApp function from vue
import { createApp } from "vue";
// import the App componet from App.vue
import App from "./App.vue";
import router from "./router";

// create the app with the App componet and mount it to a div with id of #app
createApp(App).use(router).mount("#app");
