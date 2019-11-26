import React from 'react';
import { Button } from 'react-bootstrap';

const style = {
    padding: 5,
    margin: 10,
}

function Skills(props) {
    const mySkills = props.skills.map((skill) =>
        <Button variant="dark" style={style}>{skill}</Button>    
    )
    return (
        <div>
            <h5>My Skills:</h5>
            {mySkills}
        </div>
    )
};

export default Skills;
