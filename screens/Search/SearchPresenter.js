import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../Movies/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ movies, shows, onChange, onSubmit, keyword }) => (
  <ScrollContainer  refreshFn={onSubmit} loading={false} contentContainerStyle={{ paddingTop: 10 }}>
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movies results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            votes={movie.vote_average}
            poster={movie.poster_path}
            id={movie.id}
            title={movie.name}
          />
        ))}
      </HorizontalSlider>
    )}
    {movies.length !== 0 && (
      <HorizontalSlider title={"Tv results"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            votes={show.vote_average}
            poster={show.poster_path}
            id={show.id}
            title={show.name}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
