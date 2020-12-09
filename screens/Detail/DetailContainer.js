import React, {useEffect, useState} from "react";
import * as WebBrowser from "expo-web-browser";
import DetailPresenter from "./DetailPresenter";
import {movieApi, tvApi} from "../../api";

export default ({
  navigation,
  route: {
    params: {
      isTv,
      id,
      title,
      backgroundImage,
      poster,
      votes,
      overview,
      releaseDate,
    },
  },
}) => {
  console.log(isTv);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    loading,
    result: {
      title,
      backgroundImage,
      poster,
      votes,
      overview,
      releaseDate,
      videos:{
        results:[]
      }
    },
  });
  const getData = async () => {
    console.log(isTv);
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path || getDetail.poster_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
        releaseDate: getDetail.release_date,
      },
    });
  };
  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };
  return <DetailPresenter {...detail} openBrowser={openBrowser} />;
};
