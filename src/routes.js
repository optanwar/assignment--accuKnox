import React from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));
export const route = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: Dashboard // Do not wrap with <Home /> here
  }, 
];