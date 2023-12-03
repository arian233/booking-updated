import React from "react"

import "./index.sass"

interface Props {
    className?: string
    id?: string
    type?: React.HTMLInputTypeAttribute | undefined
    variant?: "textField" | "dropDown"
    icon?: any
    children?: any
}

export default function Input(props: Props) {
    const addedClassname = props.className ? props.className : "";
    const inputMapObj = {
        textField: <input type={props.type} className={`input  ${addedClassname}`} />,
        dropDown: <select id={props.id}>{props.children}</select>
    };
    const variant = props.variant ? props.variant : "textField";
    const input = inputMapObj[variant];

    return (
        <div className="input-cotainer">
            {input}
            {
                props.icon &&
                <div className="icon-container">
                    {props.icon}
                </div>
            }
        </div>
    )
}
