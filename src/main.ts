import { h, createApp } from "vue";
import App from "./components/App.vue";
import store from "./store";

// Simple "Hack" to get  JSX to work!
const React = {
  createElement(tag: string, attributes: {} | null, ...children: any[]) {
    return h(tag, attributes, children);
  },
};
(window as any).React = React;

const app = createApp(App);

app.use(store);

app.mount("#app");
