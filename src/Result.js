import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section>
        <h2>{props.result.word}</h2>
        <p className="phonetic">{props.result.phonetic}</p>
        </section>

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <section>
              <h3>{meaning.partOfSpeech}</h3>
              <p>
                {meaning.definition}
              </p>
              <Example example={meaning.example} />
              <Synonyms synonyms={meaning.synonyms} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
