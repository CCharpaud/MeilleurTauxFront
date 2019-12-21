import React from "react";
import "../ProgressBar/style.css";

export default function ProgressBar(props) {
  return (
    <div className="container">
      <div className="progress">
        <div className="progress-bar" style={{ width: props.percent }}>
          <div className="progressCircle">
            <div className="circle" style={{ paddingLeft: props.percent }}>
              <div className="outsideCircle">
                <div className="circlePercent">
                  <span> {props.percent} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
