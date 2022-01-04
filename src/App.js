import React from "react";
import Navigation from "./navigations";
import { Provider } from "react-redux";
import store from "./data/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
