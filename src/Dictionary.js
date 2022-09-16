import React, { useState } from "react";
import "./Dictionary.css";
import Photos from "./Photos";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Documentation: https://dictionaryapi.dev/
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    // Documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f91700001000001a205f4f79b2243b7be5cbcb7c3d4dec6";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePhotoResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
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
          <label className="label">What word do you want to look up?</label>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="sunset"
              onChange={handleKeywordChange}
              autoFocus="on"
              className="input-group p-3 rounded border border-light"
            ></input>
          </form>
          <p>i.e. paris, wine, yoga, coding</p>
        </section>
        <Results definition={definition} />
        <Photos photos={photos} />
        <div className="credits">
          This project was coded by Lauren Jones and is{" "}
          <a
            href="https://github.com/lauren-jones/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </div>
        .
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
