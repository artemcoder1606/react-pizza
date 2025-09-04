import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

const rootElem = document.getElementById("root");

if (rootElem) {
  createRoot(rootElem).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
