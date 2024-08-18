import { useRef, useEffect, useState } from "react"
import NavBar from "../NavBar"
import firestore from "../firebase"
import { addDoc, collection, onSnapshot} from "@firebase/firestore";
import MentorCards from "../MentorCards";
import "../../styles/Home.css"
import Filter from "../Filter";

function Home() {

  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  

  useEffect(() => {
    const mentorCollectionRef = collection(firestore, 'mentors');
    const unsubscribe = onSnapshot(mentorCollectionRef, (snapshot) => {
      const mentorsList = snapshot.docs.map(doc => doc.data());
      setMentors(mentorsList);
      setFilteredMentors(mentorsList);
    });

    return () => unsubscribe();
  }, []);

  const handleFilterChange = (filters) => {
    const { searchName, program, levelOfStudy } = filters;

    const filteredList = mentors.filter(mentor => {
        return (
            (searchName === "" || mentor.name.toLowerCase().includes(searchName.toLowerCase())) &&
            (program === "" || mentor.program.includes(program)) &&
            (levelOfStudy === "" || mentor.levelOfStudy.includes(levelOfStudy))
        );
    });

    setFilteredMentors(filteredList);
};

// // Handeling Reviews
//   const messageRef = useRef();
//   const ref = collection(firestore, "messages");

//   const handleSave = async(e) => {
//     e.preventDefault();
//     console.log(messageRef.current.value);

//     let data = {
//       message: messageRef.current.value,
//     }

//     try{
//       addDoc(ref, data);
//     }catch(e){
//       console.log(e);
//     }

//   }

  // Handling Reviews
  const messageRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async(e) => {
    e.preventDefault();

    const message = messageRef.current.value.trim();

    if (message === "") {
        alert("Please enter a message before submitting.");
        return;
    }

    let data = {
        message: message,
    }

    try {
        await addDoc(ref, data);
        // Clear the textarea after submission
        messageRef.current.value = "";
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <>
    <NavBar/>
    <Filter onFilterChange={handleFilterChange}/>
    <h1>Mentors</h1>
    <div className="cards">
    <MentorCards mentors={filteredMentors}/>
    </div>
    
    <div className="feedback">
      <h2>Please provide feedback ❤️:</h2>
      <form onSubmit={handleSave} className="form">
        <label htmlFor="review">Enter Message (adds new data in message table): </label>
        <textarea
              ref={messageRef}
            />
        {/* <input type="text" name="review" ref={messageRef}/> */}
        <button type="submit">Save</button>
      </form>
    </div>
    </>
  )
}

export default Home
