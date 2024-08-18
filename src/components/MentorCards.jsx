import "../styles/MentorCard.css";
import { useState, useEffect } from "react";
import { collection, addDoc, deleteDoc, onSnapshot, query, where, getDocs } from "@firebase/firestore";
import firestore from "./firebase";
import { Link } from "react-router-dom";

function MentorCards({mentors}) {

    const [favoriteMentors, setFavoriteMentors] = useState([]);
    const [notification, setNotification] = useState("");

    useEffect(() => {
        const favoritesRef = collection(firestore, 'favorite');
        const unsubscribe = onSnapshot(favoritesRef, (snapshot) => {
            setFavoriteMentors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        });

        return () => unsubscribe();
    }, []);

    const handleAddRemoveFavorites = async (mentor) => {
        const favoritesRef = collection(firestore, 'favorite');
        const q = query(favoritesRef, where("name", "==", mentor.name));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            // Add to favorites
            await addDoc(favoritesRef, {
                name: mentor.name,
                rating: mentor.rating,
                ratingCount: mentor.ratingCount,
                program: mentor.program,
                levelOfStudy: mentor.levelOfStudy,
                photo: mentor.photo,
            });
            setNotification(`${mentor.name} added to favorites!`);
        } else {
            // Remove from favorites
            const docId = querySnapshot.docs[0].id;
            await deleteDoc(querySnapshot.docs[0].ref);
            setNotification(`${mentor.name} removed from favorites!`);
        }

        // Clear notification after 3 seconds
        setTimeout(() => setNotification(""), 3000);
    };

    const isMentorFavorite = (mentor) => {
        return favoriteMentors.some(favMentor => favMentor.name === mentor.name);
    };

    // if (mentor.photo == null) {
    //     mentor.photo = "https://wallpapercave.com/wp/wp6408959.jpg";
    //   }

    return (
        <>
        {mentors.map((mentor, i) => (
            <article key={i}>
                <img src={mentor.photo} alt="" />
                <h3>{mentor.name}</h3>
                <p>★ {mentor.rating} / 5</p>
                <p><b>Rating Count:</b> {mentor.ratingCount}</p>
                <Link to={`/mentor/${mentor.id}`}>Mentor Details</Link>
            </article>
        ))}
         {notification && <div className="notification">{notification}</div>}
        </>
    );
}

export default MentorCards;
