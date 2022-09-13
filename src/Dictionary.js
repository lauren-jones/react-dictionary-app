import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <label className="label">What word do you want to look up?</label>
        <form onSubmit={search}>
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
    </div>
  );
}
