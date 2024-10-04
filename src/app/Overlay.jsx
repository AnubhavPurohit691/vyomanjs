import React, { useState } from 'react';
import Image from 'next/image';
import Loading from './user/upscreen';

const Overlay = () => {
    const [visible, setVisible] = useState(true);

    const handleOverlayClick = () => {
        setVisible(false);
    };

    const handleTransitionEnd = () => {
        // Remove the overlay from the DOM after the transition is complete
        const overlayElement = document.getElementById('overlay');
        if (overlayElement) {
            overlayElement.removeEventListener('transitionend', handleTransitionEnd);
            overlayElement.remove();
        }
    };

    // If visible is false, return null to prevent rendering the component again
    if (!visible) {
        return null;
    }

    return (
        <div
            id="overlay"
            onClick={handleOverlayClick}
            onTransitionEnd={handleTransitionEnd}
        >
         <Loading/>
        </div>
    );
};

export default Overlay;
