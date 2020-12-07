import React, { useEffect, useState } from "react";
import { movieApi } from "../../api";
import MoviesPresenter from "../Movies/MoviesPresenter";

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.noPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };

  useEffect(() => {
    getData();
  }, []);



  return <MoviesPresenter refreshFn={getData}{...movies} />;
};
