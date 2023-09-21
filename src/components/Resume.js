import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Resume() {
    const proficiencies = [
        { skill: "HTML", icon: "fa-html5" },
        { skill: "CSS", icon: "fa-css3" },
        { skill: "JavaScript", icon: "fa-js-square" },
        { skill: "Express", icon: "fa-server" },
        { skill: "React", icon: "fa-react" },
        { skill: "Node.js", icon: "fa-node" },
        { skill: "GraphQL", icon: "fa-database" },
        { skill: "GitHub", icon: "fa-github" }
    ];

    return (
        <section id="resume" className="container my-5">
            <h3 className="text-center mb-4">Resume</h3>
            <div className="d-flex justify-content-center mb-4">
                <a href="path_to_resume.pdf" className="btn btn-primary" download>Download My Resume</a>
            </div>
            <h4 className="mb-3 text-center">Proficiencies:</h4>
            <ul className="list-group list-group-horizontal-md d-flex justify-content-center flex-wrap">
                {proficiencies.map(item => (
                    <li key={item.skill} className="list-group-item text-center m-2 p-3">
                        <i className={`fa ${item.icon} fa-3x mb-2`}></i>
                        <div>{item.skill}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;





