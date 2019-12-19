import React from "react";
import "../Button/style.css";

export default function Button(props) {
  return (
    <div className="wrapper">
      <label for={props.id}>
        <div className="butt">
          <input
            type="radio"
            name={props.cat}
            id={props.id}
            value={props.value}
            onChange={event => {
              props.setChoice(event.target.value);
            }}
          />
          <span> {props.name} </span>
        </div>
      </label>
    </div>
  );
}
