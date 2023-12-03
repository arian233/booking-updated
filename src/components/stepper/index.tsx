import React from 'react';

import "./index.sass"

const stages = [
    {
        name: "Account",
        description: "Your name and email will be used to save your order on our servers."
    },
    {
        name: "Payment",
        description: "Payments are done through paypal and are secure end to end."
    },
    {
        name: "ICBC Info",
        description: `Your Driver License # and ICBC keyword will be used to connect to you ICBC account. \nAll information provided will be encrypted and will only be used to connect to ICBC.`
    },
    {
        name: "Configuration",
        description: "You can now configure for which test you’d like to sign up for and your preferred locations."
    }
]

export default function Stepper(props: any) {
    // const currentStageIndex = 2;
    const currentStage = stages[props.currentStageIndex];
    const formattedDescription = currentStage.description.split("\n").map(
        (t, i) => <p key={`text-${i}`}>{t}</p>
    );

    // const handleClick = (index: number) => {
    //     props.setCurrentStageIndex(index);
    // }
    
    return (
        <div className="stepper-container flex column">
            <div className="lines-container flex row center">
                {
                    stages.map(
                        (stage, i) => {
                            const isActive = i === props.currentStageIndex;
                            const className = isActive ? "active" : "";

                            return (
                                <div 
                                    key={`step-${i}`}
                                    className={`line-container ${className}`} 
                                    // onClick={() => handleClick(i)}
                                >
                                    <p className="line-text">
                                        {stage.name}
                                    </p>
                                    <span className="line"></span>
                                </div>
                            );
                        }
                    )
                }
            </div>
            <p className="step-desc">
                {formattedDescription}
            </p>
        </div>
    )
}