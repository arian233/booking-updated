import React from "react";

import "./index.sass";

interface Props {
  id?: string;
  color: "grey" | "midnight";
  top?: boolean;
  bottom?: boolean;
  children?: any;
}

export default function CurveyLayout(props: Props) {
  return (
    <div id={props.id} className="curvey-layout">
      {!!props.top && (
        <img
          className="curve up"
          src={`/images/layout/${props.color}_curve_up.svg`}
          alt=""
        />
      )}
      <div className={`curvey-container ${props.color}`}>{props.children}</div>
      {!!props.bottom && (
        <img
          className="curve down"
          src={`/${props.color}_curve_down.svg`}
          alt=""
        />
      )}
    </div>
  );
}
