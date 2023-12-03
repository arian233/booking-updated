import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../button";

import "./index.sass"

const options = [
    {
        id: 2,
        text: "Get your class 5 or class 7 road test booking within 4 weeks.",
        heading: "Within 4 weeks",
        price: 19.95,
        value: "4 weeks"
    },
    {
        id: 1,
        text: "Get your class 5 or class 7 road test booking within 1 week.",
        heading: "Within 1 week",
        price: 39.95,
        value: "1 week"
    },
]

export default function Booking(props: any) {
    const [ activeID, setActiveID ] = useState(1)

    const handleOptionSelect = (id: number) => {
        if (id === activeID) {

            return;
        }

        // const selectedOption = options.filter(option => option.id === id)[0];

        setActiveID(id);
    }

    return (
        <section id="book">
            <div className="columns">
                <div className="container book-paper">
                    <h3>Book now</h3>
                    <h2>Choose the ideal package for you and get your road test soon.</h2>
                    <div className="book-options-container flex row med-column between">
                        {options.map(
                            (option, i) => {
                            const isActive = option.id === activeID;
                            const className = isActive ? "active" : "";
                            return (
                                <div 
                                    className={`option ${className}`}
                                    key={`option-${option.id}`} 
                                    onClick={() => handleOptionSelect(option.id)}
                                >
                                    <h4>{option.heading}</h4>
                                    <p>{option.text}</p>
                                    <div className="price">{option.price}</div>
                                </div>
                            )

                        })}
                    </div>
                    <div className="book-footer flex row between align-center wrap-reverse">
                        <p>If we fail to deliver, then you will receive a <u>full refund.</u></p>
                        <Link to={`/checkout?opt=${activeID}`}>
                            <Button className="booking-button">
                                Book now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}