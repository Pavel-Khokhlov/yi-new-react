import { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";

render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
