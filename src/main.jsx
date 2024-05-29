import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/dark-mode";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="system">
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
