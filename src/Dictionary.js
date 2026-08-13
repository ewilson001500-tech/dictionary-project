import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }

  function search(){
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let key = "f37daf9e84tf92dob02174b7ea4039ad";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(api).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load (){
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <label>What word do you want to look up?</label>
          <input
            type="search"
            placeholder="Search for a word"
            value="sunset"
            onChange={handleChange}
            className="search-input"
          />
        </form>
      </section>
      <Result result={result} />
    </div>
  );
  } else {
    load();
    return "Loading";
  }

  
}
