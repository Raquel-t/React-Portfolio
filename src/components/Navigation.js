import React from 'react';

function Navigation({ setCurrentPage, currentPage }) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler ms-auto" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href="#about-me" onClick={() => setCurrentPage('AboutMe')} className={`nav-link ${currentPage === 'AboutMe' ? 'active' : ''}`}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#my-work" onClick={() => setCurrentPage('Portfolio')} className={`nav-link ${currentPage === 'Portfolio' ? 'active' : ''}`}>My Work</a>
                        </li>
                        <li className="nav-item">
                            <a href='#contact' onClick={() => setCurrentPage('Contact')} className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}>Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a href='#Resume' onClick={() => setCurrentPage('Resume')} className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;