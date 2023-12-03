import React from "react"

import "./index.sass"

interface Props {
    className?: string
    id?: string
    variant?: "primary" | "secondary" | "alert"
    children: any
    onClick?: () => void
}

export default function Button(props: Props) {
    let variant = "primary"
    if (props.variant) {
        variant = props.variant;
    }
    const addedClassname = props.className ? props.className : "";
    
    return (
        <button className={`button round ${variant} ${addedClassname}`} onClick={props.onClick}>
            { props.children }
        </button>
    )
}
    