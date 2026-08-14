import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [result, setResult] = useState(null);
  let [photo, setPhoto] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data);
  }

  function handlePhotoResponse(response) {
    setPhoto(response.data.photos);
  }

  function search() {
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let key = "f37daf9e84tf92dob02174b7ea4039ad";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(api).then(handleResponse);

    let photoKey = "f37daf9e84tf92dob02174b7ea4039ad";
    let photoApi = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoKey}`;
    axios.get(photoApi).then(handlePhotoResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
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
              onChange={handleChange}
              className="search-input"
            />
          </form>
          <small>i.e. pairs, wine, yoga, coding</small>
        </section>
        <Result result={result} />
        <Photos photos={photo}/>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
