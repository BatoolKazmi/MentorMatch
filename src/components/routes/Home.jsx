import { useRef, useEffect, useState } from "react"
import NavBar from "../NavBar"
import firestore from "../firebase"
import { addDoc, collection, onSnapshot} from "@firebase/firestore";
import MentorCards from "../MentorCards";
import "../../styles/Home.css"
import Filter from "../Filter";

function Home() {

  const [mentors, setMentors] = useState([]);
  

  useEffect(() => {
    const mentorCollectionRef = collection(firestore, 'mentors');
    const unsubscribe = onSnapshot(mentorCollectionRef, (snapshot) => {
      setMentors(snapshot.docs.map(doc => doc.data()));
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    }

    try{
      addDoc(ref, data);
    }catch(e){
      console.log(e);
    }

  }

  return (
    <>
    <NavBar/>
    <Filter/>
    <h1>Mentors</h1>
    <div className="cards">
    <MentorCards mentors={mentors}/>
    </div>
    
    <div className="feedback">
      <h2>Please provide feedback ❤️:</h2>
      <form onSubmit={handleSave} className="form">
        <label htmlFor="">Enter Message (adds new data in message table): </label>
        <input type="text" ref={messageRef}/>
        <button type="submit">Save</button>
      </form>
    </div>
    </>
  )
}

export default Home
