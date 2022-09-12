import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio !== "" && props.phonetic.text !== "") {
    return (
      <div>
        <div>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        </div>
        <div>{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
