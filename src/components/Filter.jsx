import "../styles/Filter.css"
import { useState } from "react"

function Filter({ onFilterChange }) {

    const [searchName, setSearchName] = useState("");
    const [program, setProgram] = useState("");
    const [levelOfStudy, setLevelOfStudy] = useState("");

    const handleSearchNameChange = (ev) => {
        setSearchName(ev.target.value);
    };

    const handleProgramChange = (ev) => {
        setProgram(ev.target.value);
    };

    const handleLevelOfStudyChange = (ev) => {
        setLevelOfStudy(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        onFilterChange({
            searchName,
            program,
            levelOfStudy
        });
    };


    return (
        <>
            <div className="filter">
                <h2><b>Filter</b></h2>
                <form
                    className="FilterForm"
                    onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="search">Search by name: </label>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={searchName}
                            onChange={handleSearchNameChange} />
                    </div>
                    <div>
                        <label htmlFor="program">Program: </label>
                        <select name="program" id="program" value={program} onChange={handleProgramChange}>
                            <option value="">Select Program</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Software Engineering">Software Engineering</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Product Management">Product Management</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="program">Level of Study: </label>
                        <select name="levelOfStudy" id="levelOfStudy" value={levelOfStudy} onChange={handleLevelOfStudyChange}>
                            <option value="">Select Level</option>
                            <option value="Less than Secondary/High School">Less than Secondary/High School</option>
                            <option value="Secondary/High School">Secondary/High School</option>
                            <option value="Undergraduate University">Undergraduate University</option>
                            <option value="Graduate University (Masters, Professional, Doctoral, etc)">Graduate University (Masters, Professional, Doctoral, etc)</option>
                            <option value="Code School/Bootcamp">Code School/Bootcamp</option>
                            <option value="Other Vocational/Trade Program or Apprenticeship">Other Vocational/Trade Program or Apprenticeship</option>
                            <option value="Post Doctorate">Post Doctorate</option>
                        </select>
                    </div>
                    <div>
                        <button>Find Mentor!</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Filter;
