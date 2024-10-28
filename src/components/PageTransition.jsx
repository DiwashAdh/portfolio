import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const PageTransition = ({ children }) => {
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Trigger entering animation on component mount
        setIsEntering(true);
        const enterTimer = setTimeout(() => {
        setIsEntering(false);
        }, 5000); // Match duration with CSS openAnimation

        return () => clearTimeout(enterTimer);
    }, []);

    return (
        <div>
            {/* Circle transition overlay with entering and exiting states */}
            <div className={`circle-transition ${isEntering ? 'entering' : ''} ${isExiting ? 'exiting' : ''}`} />

            {/* Render children content only after entering transition ends */}
            {!isEntering && !isExiting && children}
        </div>
    );
};

export default PageTransition;
