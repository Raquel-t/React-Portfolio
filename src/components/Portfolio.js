import React from 'react';

function Portfolio() {
    const projects = [
        {
            title: "Weather Web App",
            description: "Project One",
            imageUrl: process.env.PUBLIC_URL + "/assets/Images/Screenshot 2023-06-05 210751.png",
            repoUrl: "https://github.com/Raquel-t/Weather-Star",
            deployedUrl: "https://raquel-t.github.io/Weather-Star/"
        },
        {
            title: "Planner",
            description: "Project two",
            imageUrl: process.env.PUBLIC_URL + "/assets/Images/Screenshot 2023-05-18 week5 assignment.jpg",
            repoUrl: "https://github.com/Raquel-t/Dailylife-Planner",
            deployedUrl: "https://raquel-t.github.io/Dailylife-Planner/"
        },
        {
            title: "Survey Management Service",
            description: "Team Project2",
            imageUrl: process.env.PUBLIC_URL + "/assets/Images/Screenshot 2023-08-07 210957.jpg",
            repoUrl: "https://github.com/JacobDFlores/Survey-Management-Service",
            deployedUrl: ""
        },
        {
            title: "BA Travel Application (Styling)",
            description: "Team Project One",
            imageUrl: process.env.PUBLIC_URL + "/assets/Images/travel-landing.PNG",
            repoUrl: "https://github.com/pzhong1/BA-travel-",
            deployedUrl: "https://pzhong1.github.io/BA-travel-/"
        },
        {
            title: "Note Taker",
            description: "Project Three",
            imageUrl: process.env.PUBLIC_URL +"/assets/Demo/Note Taker.gif",
            repoUrl: "https://github.com/Raquel-t/Notes-App",
            deployedUrl: "https://note-star-0fe390a57bff.herokuapp.com/"
        },
    ];

    return (
        <section className="my-work py-5" id="my-work">
            <h2 className="section_title text-center mb-4">My Work</h2>

            <div className="row justify-content-center">
                {projects.map(project => (
                    <div key={project.title} className="col-md-4 mb-4">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <div className="title-overlay">
                                <div className="project-title">{project.title}</div>
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="repo-link">Repo</a>
                                <span> | </span>
                                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="deployed-link">View Live</a>
                            </div>
                            <img className="card-img-top" src={project.imageUrl} alt={project.title} />
                        </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;