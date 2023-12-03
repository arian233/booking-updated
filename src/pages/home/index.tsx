import React, { useState } from "react";

import { functions } from "../../config/firebase";
import { httpsCallable } from "firebase/functions";
import { signUpWithEmail, signInWithEmail } from "../../utility";
import { Link } from "react-router-dom";

import Booking from "../../components/booking";
import Button from "../../components/button";
import Nav from "../../components/nav";
import Reviews from "../../components/reviews";
import CurveyLayout from "../../layout/curvey";

import "./index.sass";

export default function Home(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [licenceNumber, setLicenceNumber] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setEmail(value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setPassword(value);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setName(value);
  };

  const handleLicenceNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setLicenceNumber(value);
  };

  const handleKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setKeyword(value);
  };

  // TODO: convert to general functions
  // TODO: use with firebase listeners??
  // TODO: handle errors (there is an error where user already exists)
  // see: https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#createuserwithemailandpassword
  const handleSignUp = async () => {
    const user = await signUpWithEmail(email, password);

    console.log("user", user);
  };

  const handleSignIn = async () => {
    const user = await signInWithEmail(email, password);

    console.log("handle sign in complete");
    console.log("user", user);
  };

  interface Response {
    status: string;
    code: number;
    message: string;
  }

  const handleLoginCall = async () => {
    const icbcInit = httpsCallable(functions, "icbcInit");

    // returns cors error if not found
    // callable functions only allow POST
    const result = await icbcInit({
      name,
      licenceNumber,
      keyword,
    });

    // Read result of the Cloud Function.
    const data = result.data as Response;
    const { message: sanitizedMessage } = data;

    console.log(JSON.stringify(data));
  };

  return (
    <>
      <Nav />
      <section id="header">
        <div className="columns">
          <div className="container flex row med-column small-align-center between">
            <div id="header-title">
              <h1>
                Book Your <span>Class 5</span> or <span>Class 7</span> ICBC
                Driving Exam Within <u>1 Week!</u>
              </h1>
              <Link to="/checkout">
                <Button>Book now</Button>
              </Link>
            </div>
            <div id="header-image">
              <img
                src="/images/home/iphone_illustration_3x.png"
                alt="Get your appointment today!"
              />
            </div>
          </div>
        </div>
      </section>
      <CurveyLayout id="about" color="grey" top bottom>
        <div className="columns">
          <div className="container">
            <div className="about-description">
              <h3>Did you know?</h3>
              <h2>
                On average, bookings directly through ICBC take around{" "}
                <u>6 months!</u>
              </h2>
              <p>
                If you’re one of the many people who are fed up with how slow
                the process of booking a road test can be then you we have a
                solution for you. Choose one of our booking options and we’ll
                get you your road test appointment within a week!
              </p>
            </div>
            <div className="about-stats flex row between wrap">
              <div className="about-stat-element">
                <h2>20+</h2>
                <p>appointments have been booked successfully so far.</p>
              </div>
              <div className="about-stat-element">
                <h2>100%</h2>
                <p>
                  of the customers who bought our booking options have left
                  happy.
                </p>
              </div>
              <div className="about-stat-element">
                <h2>83%</h2>
                <p>faster than booking directly from ICBC.</p>
              </div>
              <div className="about-stat-element">
                <h2>25+</h2>
                <p>
                  of the ICBC road test locations are supported through our
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CurveyLayout>
      <Booking />
      <section id="how-it-works">
        <div className="columns">
          <div className="container">
            <h3>How it works.</h3>
            <h2 className="heading-width">
              Using AI we actively monitor the available time slots that match
              with your ideal road test time and location.
            </h2>

            <div className="step step-1 flex row med-column between align-center">
              <div className="step-image">
                <img
                  src="/images/home/steps/step_1.png"
                  alt="ICBC login information."
                />
              </div>
              <div className="step-desc">
                <h2>Step 1</h2>
                <p>
                  You provide us your ICBC login information which gets
                  encrypted right away in our system for maximum cyber
                  protection. This is needed so that we can book the appointment
                  on your behalf.
                </p>
              </div>
            </div>
            <div className="step step-2 flex row-reverse med-column between align-center">
              <div className="step-image">
                <img
                  src="/images/home/steps/step_2.png"
                  alt="AI script finds a suitable appointment for you."
                />
              </div>
              <div className="step-desc">
                <h2>Step 2</h2>
                <p>
                  Using the given preferences, you’ll get added into our queue
                  of customers and once our AI script finds a suitable
                  appointment in the ICBC database, we’ll start the booking
                  process.
                </p>
              </div>
            </div>
            <div className="step step-3 flex row med-column between align-center">
              <div className="step-image">
                <img
                  src="/images/home/steps/step_3.png"
                  alt="You'll receive a notification."
                />
              </div>
              <div className="step-desc">
                <h2>Step 3</h2>
                <p>
                  Once the application process has been completed by our AI, you
                  will receive a notification to the provided email account
                  about your booked roat test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <footer className="columns">
        <div className="container">
          <div className="footer-header flex row small-column between align-center">
            <Link to="/" className="footer-logo">
              <img src="images/logo/logo.svg" alt="BookBoy Logo" />
            </Link>

            <div className="footer-header-text flex column">
              <h3>No more waiting.</h3>
              <h2>
                Schedule your road test today, so that you can have your new
                license by next month.
              </h2>
              <Link to="/checkout">
                <Button className="footer-cta">Book now</Button>
              </Link>
            </div>
          </div>
          <div className="footer-bottom flex row wrap between align-center">
            <p>
              <b>
                Made with <img src="/images/icons/heart.png" alt="Love" /> in
                Vancouver, BC.
              </b>
            </p>
            <p>© BookBoy. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
