import NavBar from "../NavBar"
import ScheduleAppointment from "../ScheduleAppointment";
import ScheduleAppointmentLink from "../ScheduleAppointmentLink";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import firestore from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faComments, faStar } from '@fortawesome/free-solid-svg-icons'
import "../../styles/Mentor.css";

function Mentor() {
  let { id } = useParams();
  console.log(id)
  const [mentor, setMentor] = useState({
    photo: "",
    name: "",
    rating: 0.0,
    ratingCount: 0,
  });
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    const fetchMentor = async () => {
      if (id) {
        const mentorCollectionRef = collection(firestore, "mentors");
        const q = query(mentorCollectionRef, where("id", "==", id));
        try {
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
      
            const mentorDoc = querySnapshot.docs[0];
            const mentorData = mentorDoc.data();
            setMentor({
              id: mentorDoc.id, // Store document ID
              ...mentorData
            });
          } else {
            console.log("No document found with id:", id);
          }
        } catch (error) {
          console.error("Error fetching mentor:", error);
        }
      }
    };

    fetchMentor();
  }, [id]);

  const handleRatingChange = (event) => {
    setNewRating(event.target.value);
  };
  
  const handleRatingSubmit = async () => {
    const { rating, ratingCount } = mentor;
    const parsedNewRating = parseFloat(newRating);

    console.log("Updating mentor with ID:", mentor.id);
    if (!mentor.id) {
      console.error("Mentor document ID is not available.");
      return;
    }
     // Calculate the new average rating
     const updatedRatingCount = ratingCount + 1;
     const updatedRating = (rating * ratingCount + parsedNewRating) / updatedRatingCount;

     const roundedRating = parseFloat(updatedRating.toFixed(2));
  try {
    // Query to find the document by the custom 'id' field
    const mentorCollectionRef = collection(firestore, "mentors");
    const q = query(mentorCollectionRef, where("id", "==", mentor.id));
    
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming only one document matches the query
      const mentorDoc = querySnapshot.docs[0];
      const mentorDocRef = mentorDoc.ref; // Get the document reference

      // Update the document's rating and ratingCount
      await updateDoc(mentorDocRef, {
        rating: roundedRating,  // Store rating as a string if needed for display
        ratingCount: updatedRatingCount
      });

      // Update local state after successfully updating Firestore
      setMentor((prevMentor) => ({
        ...prevMentor,
        rating: updatedRating.toFixed(2),
        ratingCount: updatedRatingCount
      }));

    } else {
      console.log("No document found with the id:", mentor.id);
    }

  } catch (error) {
    console.error("Error updating rating:", error);
  }
};
    return (
      <>
      <NavBar/>
      <div className="center-container">
        <div className="mentor-container"> 
          <div className="mentor-info">
            <img src={mentor.photo} alt={mentor.name} className="mentor-image" />
            <div className="mentor-rating">
              <FontAwesomeIcon icon={faStar} size="2x" className="star"/>
              <span className="rating-number">{mentor.rating}</span>
            </div>
          </div>
          <div className="mentor-description">
            <h2>{mentor.name}</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="rating-container">
          <label htmlFor="rating-input">Rate this mentor (1-5):</label>
          <input
            id="rating-input"
            type="number"
            min="1"
            max="5"
            value={newRating}
            onChange={handleRatingChange}
          />
          <button onClick={handleRatingSubmit}>Submit Rating</button>
        </div>
        <div className="mentor-icons">
          <div className="icon-container">
            <ScheduleAppointmentLink/>
          </div>
          <Link to={`/chat/${id}`} className="icon-link">
            <div className="icon-container">
              <FontAwesomeIcon icon={faComments} size="5x" className="icon" />
              <p>Chat</p>
            </div>
          </Link>
        </div>
      </div>
      </>
      
    )
  }
  
  export default Mentor
  