import NavBar from "../NavBar"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faComments, faStar } from '@fortawesome/free-solid-svg-icons'
import "../../styles/Mentor.css";

function Mentor() {
  const [mentor, setMentor] = useState({
    image: "",
    name: "",
    rating: 0.0
  });

  useEffect(() => {
    setMentor({
      image: "https://i.pinimg.com/736x/df/73/39/df733940625dea4a0e575c02782e4cb7.jpg",
      name: "Rishad Kumar",
      rating: 5.0
    });
  }, []);
    return (
      <>
      <NavBar/>
      <div className="center-container">
        <div className="mentor-container"> 
          <div className="mentor-info">
            <img src={mentor.image} alt={mentor.name} className="mentor-image" />
            <div className="mentor-rating">
              <FontAwesomeIcon icon={faStar} size="2x" className="star"/>
              <span className="rating-number">{mentor.rating}</span>
            </div>
          </div>
          <div className="mentor-description">
            <p><strong>{mentor.name}</strong></p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="mentor-icons">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCalendarDays} size="5x" className="icon"/>
            <p>Schedule a meeting</p>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faComments} size="5x" className="icon" />
            <p>Chat</p>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Mentor
  