import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <h4 className="Meaning">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
