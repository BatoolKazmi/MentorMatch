import { useParams, useNavigate } from 'react-router-dom';
import NavBar from "../NavBar";
import { useEffect, useState } from "react";
import firestore from "../firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Chat.css";

function ChatPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [mentor, setMentor] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");


  
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
                setMessages([
                    { text: `Hey, nice to meet you. How can I help you?`, sender: "mentor" },
                    { text: `Hello ${mentorData.name}, nice to meet you too. I’m doing well, thank you. I’m excited to start working with you.`, sender: "mentee" },
                    { text: `Great to hear! Can you tell me a little about your background and what you’re hoping to achieve through our sessions?`, sender: "mentor" },
                    { text: `Sure! I’m currently studying computer science and working on a project related to machine learning. I’m hoping to get some guidance on best practices and maybe a bit of help with troubleshooting some issues I’m facing`, sender: "mentee" },
                    { text: `That sounds like a fascinating project. Have you encountered any specific challenges so far?`, sender: "mentor" }
                ]);
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

    const handleSendMessage = () => {
        if (newMessage.trim()) {
        setMessages([...messages, { text: newMessage, sender: "mentee" }]);
        setNewMessage("");
        }
    };
    const handleBackClick = () => {
        navigate(-1); // Navigate back to the previous page
    };
  
    return (
    <>
    <NavBar />
      <div className="chat-page-container">
        <div className="chat-header">
            <button className="back-button" onClick={handleBackClick}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </button>
          {mentor && (
            <>
              <img src={mentor.photo} alt={mentor.name} className="mentor-images" />
              <div className="mentor-info">
                <h2>{mentor.name}</h2>
                <p className="online-status">Online</p>
              </div>
            </>
          )}
        </div>
        <div className="chat-messages">
            {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
            <p className="message-text">{message.text}</p>
            </div>
            ))}
        </div>
        <div className="chat-input">
            <button className="attachment-button">📎</button>
            <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            />
            <button className="image-button">📷</button>
            <button className="send-button" onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      </>
    );
  }
  
  export default ChatPage;