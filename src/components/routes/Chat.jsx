import NavBar from "../NavBar";
import { useEffect, useState } from "react"
import firestore from "../firebase"
import { Link } from "react-router-dom";
import "../../styles/Chat.css";
import { addDoc, collection, onSnapshot} from "@firebase/firestore";


function Chat() {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const mentorCollectionRef = collection(firestore, 'mentors');
        const unsubscribe = onSnapshot(mentorCollectionRef, (snapshot) => {
          const mentorsList = snapshot.docs.map(doc => doc.data());
          setMentors(mentorsList);
          setFilteredMentors(mentorsList);
        });
    
        return () => unsubscribe();
      }, []);

    return (
        <>
            <NavBar />
            <div className="chat-list-container">
                <h1>Chat with your mentors</h1>
                <ul className="chat-list">
                {mentors.map((mentor) => (
                    <li key={mentor.id} className="chat-list-item">
                    <Link to={`/chat/${mentor.id}`} className="chat-link">
                        <img src={mentor.photo} alt={mentor.name} className="mentor-photo" />
                        <span className="mentor-name">{mentor.name}</span>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </>
    );
}

export default Chat;
