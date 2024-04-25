// Imports:

// React - Router - DOM:
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// React - DOM:
import ReactDOM from "react-dom/client";

// React:
import React from "react";

// Pages:
import { Home } from "./pages";

// Constants:
const Router = createBrowserRouter([
    {
        "path": "/",
        "element": <Home />
    }
])

// Rendering:
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
)