import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleQuestion, faMagnifyingGlass, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";

export function Nav() {
    return (
        <div className='nav'>
            <div className="nav-titles">
                <h1>engine Ai</h1>
                <h4>- using Machine Learning to provide predictive capabilities and an intelligent supply chain</h4>
            </div>
            <div className="nav-logos">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faCircleQuestion} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    )
}