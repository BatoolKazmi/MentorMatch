import Home from "./Home";
import ErrorPage from "./Error";
import Mentor from "./Mentor";
import User  from "./User";
import Chat from "./Chat";

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
    path: "/user",
    element: <User />
  },
  {
    path: "/chat",
    element: <Chat />
  }
];

export default routes;
