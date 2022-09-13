import React from "react";

export default function Phonetic(props) {
  if (props.phonetic.audio !== "" && props.phonetic.text !== "") {
    return (
      <div>
        <span className="Audio">
          <a
            href={props.phonetic.audio}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary"
          >
            Listen
          </a>
        </span>
        <span className="Text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
