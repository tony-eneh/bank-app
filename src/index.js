import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store";

// wrap the rendering of the app in a fuction call
const render = () => ReactDOM.render(<App />, document.getElementById("root"));

// re-render the app whenever there is changes to the data store
store.subscribe(render);

// do the initial rendering of the app
render();

registerServiceWorker();
