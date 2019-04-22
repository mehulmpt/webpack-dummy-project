import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"))

const m = module as any
if(m && m.hot) m.hot.accept()