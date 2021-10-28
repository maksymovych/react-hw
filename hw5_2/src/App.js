import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Container from "./container/Container";
import { history } from "./reducers";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
