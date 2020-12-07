import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState({
    movies: [],
    shows: [],
    moviesError: null,
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResult({ movies, shows, moviesError, showsError });
  };

  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
      {...result}
    />
  );
};
