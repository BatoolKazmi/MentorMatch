import { useRef } from "react"
import NavBar from "../NavBar"
import firestore from "../firebase"
import { addDoc, collection } from "@firebase/firestore"
import MentorCards from "../MentorCards";

function Home() {

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
    <h1>This is Home</h1>
    <MentorCards/>
    <h2>This is a testing form</h2>
    <form onSubmit={handleSave}>
      <label htmlFor="">Enter Message (adds new data in message table): </label>
      <input type="text" ref={messageRef}/>
      <button type="submit">Save</button>
    </form>
    </>
  )
}

export default Home
