// Imports:

// Stylesheet:
import "./heading.css";

// Assets:
import LandingPageBackground from "../../assets/landing_page_background.jpg";

// React:
import React from "react";

// Heading:
const Heading = () => {
    return (
        <div className="heading-container" id="heading-container">
            <h1 className="heading-title">Sign Up Now!</h1>
            <a href="https://www.example.com">
                <button className='button-1'>
                    Click to RSVP
                </button>
            </a>
        </div>

    )
}

// Exports:
export default Heading;