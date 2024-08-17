import Home from "./Home";
import ErrorPage from "./Error";
import Mentor from "./Mentor";
import GoalList from "./GoalList";
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mentor",
    element: <Mentor />,
  },
  {
    path: "/goals",
    element: <GoalList />,
  }
];

export default routes;
