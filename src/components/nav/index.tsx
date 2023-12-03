import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

import Login from "../login";

import Button from "../button";

import "./index.sass"
 
interface Props {
    user?: any;
    logoOnly?: any;
}

export default function Nav(props: Props) {

    const [ showModal, setShowModal ] = useState(false);

    const handleModal = (bool : boolean) => {
        setShowModal(bool)
    }

    if (props.logoOnly) {
        return (
            <nav className="columns">
                <div className="container">
                    <div className="nav-container">
                        <Link to="/" className="nav-logo">
                            <img src="images/logo/logo.svg" alt="BookBoy Logo" />
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }

    return props.user ? (
        <nav className="columns">
            <div className="container">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        <img src="images/logo/logo.svg" alt="BookBoy Logo" />
                    </Link>
                    <div className="nav-buttons flex row align-center">
                        <p>
                            {props.user.email}
                        </p>
                        <Button variant="alert">
                            Sign Out
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    ) : (
        <nav className="columns">
            <div className="container">
                <div className="nav-container">
                    <Link to="/" className="nav-logo">
                        <img src="images/logo/logo.svg" alt="BookBoy Logo" />
                    </Link>
                    <div className="nav-links hidden-medium-down">
                        <ScrollLink 
                            activeClass="active" 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className="scroll-link"
                        >
                            About
                        </ScrollLink>
                        <ScrollLink 
                            activeClass="active" 
                            to="how-it-works" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className="scroll-link"
                        >
                            How it works
                        </ScrollLink>
                        <ScrollLink 
                            activeClass="active" 
                            to="reviews" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className="scroll-link"
                        >
                            Reviews
                        </ScrollLink>
                    </div>
                    <div className="nav-buttons">
                        <Link to="/checkout">
                            <Button className="hidden-small-only">
                                Book now
                            </Button>
                        </Link>
                        <Button variant="secondary" onClick={() => handleModal(true)}>
                            Sign in
                        </Button>
                    </div>
                </div>
                <Login showModal={showModal} handleModal={handleModal}/>
            </div>
        </nav>
    )
}