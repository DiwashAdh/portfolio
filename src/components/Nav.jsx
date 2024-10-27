import { Link } from 'react-scroll'; // Use Link from react-scroll for smooth scrolling
import React, { useEffect, useState } from 'react';

const Nav = () => {

    const [showNav, setNav] = useState(false);

    useEffect(() => {
        const navTimer = setTimeout(() => {
            setNav(true);
        }, 300);

        return () => {
            clearTimeout(navTimer);
        };
    }, []);

    return (
        <header className="fixed left-0 top-0 w-full text-black py-6 bg-opacity-70 backdrop-blur-md z-50 bg-gray-50">
            <div className="container mx-auto flex justify-center items-center">
                {/* Navigation Links */}
                <nav className="space-x-10">
                    
                    <Link to="projects" smooth={true} duration={500} className={` transition duration-200 ease-in-out hover:text-green-800 ${showNav ? 'slide-up' : 'opacity-0'}`}>
                        Projects
                    </Link>
                    <Link to="achievements" smooth={true} duration={500} className={` transition duration-200 ease-in-out hover:text-green-800 ${showNav ? 'slide-up' : 'opacity-0'}`}>
                        Achievements
                    </Link>
                    <Link to="faqs" smooth={true} duration={500} className={` transition duration-200 ease-in-out hover:text-green-800 ${showNav ? 'slide-up' : 'opacity-0'}`}>
                        FAQ
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
