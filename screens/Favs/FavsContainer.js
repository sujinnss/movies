import React, { useEffect, useState } from "react";
import FavsPresenter from "./FavsPresenter";
import { movieApi } from "../../api";

export default () => {
  const [movies, setMovies] = useState({
    result: [],
    error: null,
  });
  const getData = async () => {
    const [result, error] = await movieApi.discover();
    setMovies({
      result,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavsPresenter {...movies} />;
};
