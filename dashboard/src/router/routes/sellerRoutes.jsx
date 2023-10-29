import { lazy } from "react";

const Home = lazy(() => import("../../views/pages/Home"));

export const sellerRouts = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];
