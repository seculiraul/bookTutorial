import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import './index.css'
import { Provider } from "./context/Books";

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);


root.render(
    <Provider>
        <App />
    </Provider>
)