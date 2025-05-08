import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default function CVForm() {
    const [isEditing, setIsEditing] = useState(true);

    const initialGeneral = {
        name: "",
        email: "",
        phone: ""
    };
      
    const initialEducation = {
        school: "",
        degree: "",
        date: ""
    };
      
    const initialExperience = {
        company: "",
        position: "",
        from: "",
        until: ""
    };
      
    const [general, setGeneral] = useState(initialGeneral);
    const [education, setEducation] = useState(initialEducation);
    const [experience, setExperience] = useState(initialExperience);


    const handleSubmit = (e) => { 
        e.preventDefault();
        setIsEditing(false);
     };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-grid">
                <GeneralInfo info={general} onChange={setGeneral} isEditing={isEditing} />
                <Education info={education} onChange={setEducation} isEditing={isEditing} />
                <Experience info={experience} onChange={setExperience} isEditing={isEditing} />
                <div></div>
                <div></div>
                <div></div>
            </div>
          
            {isEditing && (
                <button type="submit">Submit All</button>
            )} 
            <button
                id="resetBtn"
                type="button"
                onClick={() => {
                    setIsEditing(true);
                    setGeneral(initialGeneral);
                    setEducation(initialEducation);
                    setExperience(initialExperience);
                }}
                >
                Reset
                </button>
        </form>
    );

}