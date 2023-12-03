import React, { useState, useEffect } from 'react';

import Nav from "../../components/nav";
import CurveyLayout from '../../layout/curvey';
import Options from '../../components/options';
import Stepper from '../../components/stepper';

import "./index.sass";

export default function Checkout(props: any) {
    const [ selectedOpt, setSelectedOpt ] = useState(1)
    const [currentStageIndex, setCurrentStageIndex] = useState(0)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const foo = params.get('opt');
        if(foo){
            setSelectedOpt(parseInt(foo))
        }
    }, [])

    const handleClick = () => {
        setCurrentStageIndex(currentStageIndex + 1)
    }

    const renderAccountForm = 
    <div className="card">
        <div className="full-name">
            <h3>Full name</h3>
            <span>
                <input type="text" className="input" title="First Name" autoComplete="given-name"/>
                <input type="text" className="input" title="Last Name" autoComplete="family-name"/>
            </span>
        </div>
        <h3>Email</h3>
        <input type="email" className="input" title="Email"/>
        <h3>Password</h3>
        <input type="password" className="input" title="Password"/>
        <button className="form-submit-button" onClick={handleClick}>Submit</button>
    </div>

    const renderPaymentForm = 
    <div className="payment-container">
        <button className="paypal">Paypal</button>
        <hr />
        <br />  
        <div className="card payment-card">
            <div className="card-info">
                <h3>Card</h3>
                <input type="text" className="input" title="Card Number" autoComplete="cc-number"/>
                <span>
                    <input type="text" className="input" title="Expiry Date" placeholder="MM-YYYY" autoComplete="cc-exp"/>
                    <input type="text" className="input" title="CVV"  autoComplete="cc-csc"/>
                </span>
            </div>
            <div className="billing">
                <h3>Billing Address</h3>
                <span>
                    <input type="text" className="input" placeholder="First Name" title="First Name" autoComplete="given-name"/>
                    <input type="text" className="input" placeholder="Last Name" title="Last Name" autoComplete="family-name"/>
                </span>
                <input type="text" className="input" title="Address-1" placeholder="Address" autoComplete="address-line1"/>
                <input type="text" className="input" title="Address-2" placeholder="Address-2" autoComplete="address-line2"/>
                <span>
                    <input type="text" className="input" title="City" placeholder="City" autoComplete="address-level2"/>
                    <input type="text" className="input" title="State" placeholder="State" autoComplete="address-level1"/>
                </span>
                <span>
                    <input type="text" className="input" title="Country" placeholder="Country" autoComplete="country"/>
                    <input type="text" className="input" title="Postal Code" placeholder="Postal Code" autoComplete="postal-code"/>
                </span>
            </div>
            <button className="form-submit-button" onClick={handleClick}>Pay</button>
        </div>
    </div>

    const renderICBCForm = 
    <div className="card">
        <h3>Driver Licence #</h3>
        <input type="email" className="input" title="Driver Licence"/>
        <h3>ICBC Keyword</h3>
        <input type="text" className="input" title="ICBC Keyword"/>
        <button className="form-submit-button" onClick={handleClick}>Submit</button>
    </div>

const renderForms =[renderAccountForm, renderPaymentForm, renderICBCForm];

    return(
        <div className="checkout-container">
            <Nav logoOnly />
            <div className="columns">
                <div className="container">
                    <h1 className="checkout-heading">Checkout</h1>

                    <Options selectedOpt={selectedOpt} currentStageIndex={currentStageIndex} />
                    <Stepper currentStageIndex={currentStageIndex} setCurrentStageIndex={setCurrentStageIndex}/>

                    {renderForms[currentStageIndex]}

                </div>
            </div>
            <CurveyLayout 
                id="bg-curve"
                color="grey"
                top
            >
                <div className="spacer"></div>
            </CurveyLayout>
        </div>
    );
}