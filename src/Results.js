import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.definition);

  if (props.definition) {
    console.log(props.definition);
    return (
      <div className="Definition">
        <h2>{props.definition.word}</h2>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
