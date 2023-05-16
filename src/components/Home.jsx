import React from "react";
import { useRoutes } from "react-router-dom";
import { router } from "../routers";
function Home() {
  const route = useRoutes(router);
  return <>{route}</>;
}

export default Home;
