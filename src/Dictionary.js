import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let key = "f37daf9e84tf92dob02174b7ea4039ad";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(api).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} className="search-input" />
        <input type="submit" value="Search" />
      </form>
        <Result result={result} />
    </div>
  );
}
