import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Vertical from "./Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slider from "../../components/Slider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

export default ({ refreshFn, loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <>
      <Slider>
        {nowPlaying.map((movie) => {
          return (
            <Slide
              isTv={false}
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
            />
          );
        })}
      </Slider>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => {
            return (
              <Vertical
                isTv={false}
                id={movie.id}
                key={movie.id}
                votes={movie.vote_average}
                poster={movie.poster_path}
                title={movie.title}
                backgroundImage={movie.backdrop_path}
                overview={movie.overview}
                releaseDate={movie.release_date}
              />
            );
          })}
        </HorizontalSlider>
        <List title={"Coming Soon"}>
          {upcoming.map((movie) => {
            return (
              <Horizontal
                isTv={false}
                id={movie.id}
                key={movie.id}
                releaseDate={movie.release_date}
                overview={movie.overview}
                title={movie.title}
                poster={movie.poster_path}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
              />
            );
          })}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
