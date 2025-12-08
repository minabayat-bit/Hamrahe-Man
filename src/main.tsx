import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import Password from "./pages/Password";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import Packages from "./pages/Packages";
import Servises from "./pages/Servises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/password",
    element: <Password />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/Invoice",
    element: <Invoice />
  },
  {
    path: "/Packages",
    element: <Packages />
  },
  {
    path: "/servises",
    element: <Servises />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
