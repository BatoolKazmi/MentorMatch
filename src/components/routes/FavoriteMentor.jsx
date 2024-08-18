import { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import firestore from "../firebase";
import MentorCards from "../MentorCards";
import NavBar from "../NavBar";
import "../../styles/favorite.css"

function FavoriteMentors() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritesRef = collection(firestore, 'favorite');
        const unsubscribe = onSnapshot(favoritesRef, (snapshot) => {
            setFavorites(snapshot.docs.map(doc => doc.data()));
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <NavBar />
            <h1>❤️ Favorite Mentors</h1>
            <div className="cards fav">
                <MentorCards mentors={favorites} />
            </div>
        </>
    );
}

export default FavoriteMentors;
