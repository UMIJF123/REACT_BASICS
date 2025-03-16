import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(<App />);

//Following React.createElement skips the build process, as not using JSX
//ReactDOM.createRoot(entryPoint).render(React.createElement(App));
