import { useRoutes } from "react-router-dom";
import Pdf from "../components/Pdf";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Pdf />,
    },
  ]);
  return routing;
};

export default Routers;
