import React from 'react';
import '../css/experience.css'

function Experience(props) {
    const jobExperience = props.experience.map((jobInfo) =>
        <div className="style_experience">
            <div className="flex_experience">
                <h5>{jobInfo.position}</h5>
                <h5>{jobInfo.year}</h5>
                <h5>{jobInfo.company}</h5>
            </div>
            <p><em>{jobInfo.duties}</em></p>
        </div>
    )
    return (
        <div>
            <h3 className="exp_title">Experience:</h3>
            {jobExperience}
        </div>
    )

};

export default Experience;