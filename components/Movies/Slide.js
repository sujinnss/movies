import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {apiImage} from "../../api";
import Poster from "../Poster";
import {TouchableOpacity} from "react-native";
// const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 7px;
`;
const Votes = styled.Text`
  color: rgb(230, 230, 230);
  margin-bottom: 5px;
  font-size: 12px;
  font-weight:500 ;
`;
const OverView = styled.Text`
  color: rgb(230, 230, 230);
  opacity: 0.7;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 6px 10px;
  border-radius: 4px;
`;
const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</Title>
        <Votes>★ {votes} / 10</Votes>
        <OverView>{`${overview.slice(0, 100)}...`}</OverView>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Detail</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
