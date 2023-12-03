import React, { useState, useEffect } from 'react';

import "./index.sass"

const options = [
    {
        id: 2,
        text: "Within 4 weeks",
        price: 19.95,
        value: "4 weeks"
    },
    {
        id: 1,
        text: "Within 1 week",
        price: 39.95,
        value: "1 week"
    },
]

export default function Options(props: any) {
    const [optionID, setOptionID] = useState(0);

    useEffect(() => {
        const ans = props.selectedOpt === 4 ? 2 : 1;
        setOptionID(ans)
    }, [props.selectedOpt])

    const handleOptionSelect = (id: number) => {
        if (id === optionID) {

            return;
        }

        // const selectedOption = options.filter(option => option.id === id)[0];

        setOptionID(id);
    }

    if(props.currentStageIndex === 0){ 
        return (
            <div className="options-container flex row align-center wrap between">
            {
                options.map(
                    (option, i) => {
                        const isActive = option.id === optionID;
                        const className = isActive ? "active" : "";
                        
                        return (
                            <div 
                                key={`option-${option.id}`} 
                                className={`option ${className}`} 
                                onClick={() => handleOptionSelect(option.id)}
                            >
                                <h4>{option.text}</h4>
                                <span className="price">{option.price}</span>
                            </div>
                        )
                    }
                )
            }
            </div>
        )
    }
    
    var dispalyOption = options.find(obj => {
        return obj.id === optionID
    })
    
    return (
        <div className="options-container options-container-solo">
            <div 
                key={`option-${dispalyOption && dispalyOption.id}`} 
                className={`option active`}
            >
                <h4>{dispalyOption && dispalyOption.text}</h4>
                <span className="price">{dispalyOption && dispalyOption.price}</span>
            </div>
        </div>
)
}