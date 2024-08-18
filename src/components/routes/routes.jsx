import Home from "./Home";
import ErrorPage from "./Error";
import Mentor from "./Mentor";
import Chat from "./Chat";
import GoalList from "./GoalList";
import FavoriteMentor from "./FavoriteMentor";
import ScheduleAppointment from "../ScheduleAppointment";
import GoalItem from "../GoalItem";
import ChatPage from "./ChatPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mentor/:id",
    element: <Mentor />,
  },
  {
    path: "/chat",
    element: <Chat />
  }, 
  {
    path: "/goals",
    element: <GoalList />,
  },
  {
    path:"/favorite",
    element: <FavoriteMentor/>
  },
  {
    path: "/chat/:id",
    element: <ChatPage />
  }, 
];

export default routes;
