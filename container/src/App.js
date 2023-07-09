import React, { useRef, useEffect } from 'react';
import { mount as mountObjective } from "objective/ObjectiveIndex";
import { mount as mountEducation } from "education/EducationIndex";
import { mount as mountExperience } from "experience/ExperienceIndex";
import { mount as mountSkills } from "skills/SkillsIndex";

const App = () => {
    const elObjectiveRef = useRef(null);
    const elEducationRef = useRef(null);
    const elExperienceRef = useRef(null);
    const elSkillsRef = useRef(null);

    useEffect(() => {
        if (elObjectiveRef.current) {
            mountObjective(elObjectiveRef.current);
        }
        if (elEducationRef.current) {
            mountEducation(elEducationRef.current);
        }
        if (elExperienceRef.current) {
            mountExperience(elExperienceRef.current);
        }
        if (elSkillsRef.current) {
            mountSkills(elSkillsRef.current);
        }
    }, []);

    return (
        <div>
            container
            <hr/>
            <div ref={elObjectiveRef}></div>
            <div ref={elEducationRef}></div>
            <div ref={elExperienceRef}></div>
            <div ref={elSkillsRef}></div>
        </div>
    )
}

export default App;