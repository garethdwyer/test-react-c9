import React from 'react';
import '../css/education.css'

function Education(props) {
    const studies = props.education.map((study) =>
        <div className="ed_item">
            <h4>{study.qualification}</h4>
            <h5>{study.institution}</h5>
            <h5>{study.year}</h5>
        </div>
    )
    return (
        <div className="ed_style">Education:
            <div className="ed_flex">
                {studies}
            </div>
        </div>
    )
};

export default Education;