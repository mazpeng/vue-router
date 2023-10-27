import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { createApp, provide, h } from "vue"; // Added 'h' for rendering
import App from "./App.vue";
import router from "./router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:8080/graphql",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide("DefaultApolloClient", apolloClient); // Added quotes around string
  },
  render: () => h(App),
});

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components"; // Updated path
import * as directives from "vuetify/lib/directives"; // Updated path

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify).use(router);

app.mount("#app");
