import Home from "./Home";
import ErrorPage from "./Error";
import Mentor from "./Mentor";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mentor",
    element: <Mentor />,
  }
];

export default routes;
