import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
