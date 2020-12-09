import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";
import Slide from "../../components/Movies/Slide";

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
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
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
  return <DetailPresenter {...detail} />;
};
