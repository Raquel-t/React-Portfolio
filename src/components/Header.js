import React from 'react';

function Header() {
    return (
        <header className="text-center py-4">
            <div>
                <img src="assets/Images/IMG-4207.jpg" alt="Avatar" className="picture rounded-circle"/>
            </div>
            <h1 className="greeting mt-3">Hello, I am <span className="my-name fst-italic">Raquel Tabarez</span></h1>
        </header>
    );
}

export default Header;