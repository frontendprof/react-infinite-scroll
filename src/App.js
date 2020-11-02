
import React, { useState } from "react";

import UseBookSearch from "./UseBookSearch";




function App() {

  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const handleSearch = (e) = {
    setQuery(e.target.value)
    setPageNumber(1)
  }


  UseBookSearch();



  return (
    <>
      <input type="text" onChange={handleSearch}></input>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Title</div>
      <div>Loading ... </div>
      <div>Error</div>

    </>
  );
}

export default App;
