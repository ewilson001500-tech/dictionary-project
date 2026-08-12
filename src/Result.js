import React from "react";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h5>{meaning.partOfSpeech}</h5>
              <p>
                {meaning.definition}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
