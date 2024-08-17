import Home from "./Home";
import ErrorPage from "./Error";
import Mentor from "./Mentor";
import User  from "./User";
import Chat from "./Chat";
import GoalList from "./GoalList";
import ScheduleAppointment from "../ScheduleAppointment";
import GoalItem from "../GoalItem";

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
  }, 
  {
    path:"/goals",
    element: <GoalList/>
  }
];

export default routes;
