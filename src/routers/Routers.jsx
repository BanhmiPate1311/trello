import { useRoutes } from "react-router-dom";
import Board from "~/pages/Boards/_id";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Board />,
    },
  ]);
  return routing;
};

export default Routers;
