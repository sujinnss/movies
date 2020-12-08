import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../Movies/Vertical";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import Slider from "../../components/Slider";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today, thisWeek, refreshFn }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <>
      <Slider>
        {thisWeek.map((show) => {
          console.log(show);
          return (
            <Slide
              key={show.id}
              id={show.id}
              title={show.name}
              overview={show.overview}
              backgroundImage={show.backdrop_path}
              poster={show.poster_path}
              votes={show.vote_average}
              releaseDate={show.first_air_date}
            />
          );
        })}
      </Slider>
      <HorizontalSlider title={"Popular Show"}>
        {popular.map((show) => {
          console.log(show);
          return (
            <Vertical
              isTv={true}
              id={show.id}
              key={show.id}
              votes={show.vote_average}
              poster={show.poster_path}
              title={show.name}
              overview={show.overview}
              releaseDate={show.first_air_date}
              backgroundImage={show.backdrop_path}
            />
          );
        })}
      </HorizontalSlider>
      <HorizontalSlider title={"Top Rated"}>
        {topRated.map((show) => {
          console.log(show);
          return (
            <Vertical
              isTv={true}
              id={show.id}
              key={show.id}
              votes={show.vote_average}
              poster={show.poster_path}
              title={show.name}
              overview={show.overview}
              releaseDate={show.first_air_date}
              backgroundImage={show.backdrop_path}
            />
          );
        })}
      </HorizontalSlider>
      <List title={"Airing Today"}>
        {today.map((show) => {
          console.log(show);
          return (
            <Horizontal
              isTv={true}
              id={show.id}
              key={show.id}
              overview={show.overview}
              poster={show.poster_path}
              title={show.name}
              releaseDate={show.first_air_date}
              votes={show.vote_average}
              backgroundImage={show.backdrop_path}
            />
          );
        })}
      </List>
    </>
  </ScrollContainer>
);
