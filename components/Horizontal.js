import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
// import Title from "./Title";
import {formatData, trimText} from "../utils";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  padding: 0 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;
const Data = styled.View`
  margin-left: 25px;
  width: 60%;
  font-size: 14px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;
const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`;

const Horizontal = ({ id, title, overview, poster, releaseDate }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        {releaseDate ? (
          <ReleaseDate>{formatData(releaseDate)}</ReleaseDate>
        ) : null}
        <Overview>{trimText(overview, 120)}</Overview>
      </Data>
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  releaseDate: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Horizontal;
