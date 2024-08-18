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
                            <option value="Select">Select Rating</option>
                            <option value="">Computer Science</option>
                            <option value="">Software Engineering</option>
                            <option value="">Marketing</option>
                            <option value="">Finance</option>
                            <option value="">Product Management</option>
                            <option value="">Cybersecurity</option>
                            <option value="">Artificial Intelligence & Machine Learning</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="program">Level of Study: </label>
                        <select name="levelOfStudy" id="levelOfStudy" value={levelOfStudy} onChange={handleLevelOfStudyChange}>
                            <option value="Select">Select</option>
                            <option value="">Less than Secondary/High School</option>
                            <option value="">Secondary/High School</option>
                            <option value="">Undergraduate University</option>
                            <option value="">Graduate University (Masters, Professional, Doctoral, etc)</option>
                            <option value="">Code School/Bootcamp</option>
                            <option value="">Other Vocational/Trade Program or Apprenticeship</option>
                            <option value="">Post Doctorate</option>
                        </select>
                    </div>
                    <button>Find Mentor!</button>
                </form>
            </div>
        </>
    );
}

export default Filter;
