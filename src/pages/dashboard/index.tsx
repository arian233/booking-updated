import React, { useState, useEffect } from "react";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import moment from "moment";

import Nav from '../../components/nav';
import CurveyLayout from '../../layout/curvey';

import userData from "../../data/user.json";

import "./index.sass"
import 'react-circular-progressbar/dist/styles.css';

const progressStyle = buildStyles(
    {
        pathColor: "#14BC93",
        trailColor: "#ADE0D4"
        
    }
);

export default function Dashboard(props: any) {
    const [progress, setProgress] = useState<number>(0);

    const calculateProgress = () => {
        const position = userData.status.position;
        const calculatedProgress = Math.pow(0.8, position) * 100;

        setTimeout(
            () => {
                setProgress(calculatedProgress)
            }, 500
        )
    }

    useEffect(
        () => {
            calculateProgress();
        }
    )

    return (
        <>
            <Nav user={userData} />

            <div className="columns welcome">
                <div className="container flex center">
                    <h1>Welcome {userData.name}!</h1>
                </div>
            </div>

            <div className="progress-container">
                <CircularProgressbarWithChildren value={progress} styles={progressStyle} strokeWidth={4}>
                    <img className="progress-logo" src="/images/logo/logo_short.svg" alt="BookBoy Logo" />
                </CircularProgressbarWithChildren>
            </div>

            <CurveyLayout
                id="info-section"
                color="grey"
                top
            >
                <div className="columns">
                    <div className="container info-section-container">
                        <h4>You are currently <b>{moment.localeData().ordinal(userData.status.position)}</b> in the queue.</h4>
                        <br />
                        <h4>We estimate that you’ll get your road test scheduled before <b>{moment(userData.status.ETA).format("MMMM Do")}</b>.</h4>

                        <div className="icbc-locations-container">
                            <h3>Your preferred ICBC locations:</h3>
                            <div className="locations">
                                {
                                    userData.booking.locations.map(
                                        (location: any, i: number) => {
                                            return (
                                                <div className="location flex" key={`location-${i}`}>
                                                    <img className="check" src="/images/icons/check.svg" alt="Check" />
                                                    <p>{location.address}, {location.city}</p>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </CurveyLayout>
        </>
    )
}