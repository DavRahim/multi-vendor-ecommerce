import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"));
const Success = lazy(() => import("../../views/Success"));
const Register = lazy(() => import("../../views/auth/Register"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const Home = lazy(() => import("../../views/pages/Home"));
const Unauthorize = lazy(() => import("../../views/pages/Unauthorize"));


const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorize",
    element: <Unauthorize />,
  },
  {
    path: "/success?",
    element: <Success />,
  },
];

export default publicRoutes;
