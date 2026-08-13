import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>
                <strong>Definition:</strong> {meaning.definition}
              </p>
                <Example example={meaning.example} />
                <Synonyms synonyms={meaning.synonyms}/>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
