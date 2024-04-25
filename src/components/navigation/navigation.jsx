// Imports:
import logo from '../../assets/logo.png'
// Stylesheet:
import "./navigation.css";

// React:
import React from "react";

// Navigation:
const Navigation = () => {
    const Links = [
        {
            "text": "Home",
            "container-id": "heading-container",


        },

        {
            "text": "Event Schedule",
            "container-id": "events-container"
        },
        {
            "text": "Gallery",
            "container-id": "gallery-container"
        },
        {
            "text": "Sponsors",
            "container-id": "sponsors-container"
        }
        
    ]

    return (
        <div className="navigation-component">
            <img className='logo' src={logo} alt="Logo" />
            <h1 className="navigation-component__title">WHS Robotics Banquet</h1>
            <ul className="navigation-component__links">
                {
                    Links.map(Link => (
                        <li>
                            <a onClick={
                                () => {
                                    document.getElementById(Link["container-id"]).scrollIntoView()
                                }

                            }>{Link.text}</a>
                        </li>


                    ))
                }
            </ul>
        </div>
    )
}

// Exports:
export default Navigation;