import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register";
import Dashboardlayout from "./layouts/Dashboardlayout";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "dashboard",
    element: <Dashboardlayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <Books />,
      },
    ],
  },

  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
]);

export default router;
