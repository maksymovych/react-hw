import React from "react";
import { Provider } from "react-redux";
import ContainerCards from "../container/ContainerCards";
import { store } from "../store/index";

function App() {
  return (
    <Provider store={store}>
      <ContainerCards />
    </Provider>
  );
}

export default App;
