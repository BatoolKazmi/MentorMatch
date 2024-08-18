import "../styles/MentorCard.css";

function MentorCards({mentors}) {

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
            </article>
        ))}
        </>
    );
}

export default MentorCards;
