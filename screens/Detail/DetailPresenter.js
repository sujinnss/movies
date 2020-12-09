import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import { ActivityIndicator, Dimensions } from "react-native";
import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { formatData } from "../../utils";

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const BG = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.4;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;
const ReleaseDate = styled.Text`
  margin-bottom: 7px;
  opacity: 0.8;
  color: white;
  font-size: 13px;
  font-weight: 500;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0 30px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 5px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.6;
  font-weight: 500;
`;

export default ({ result, loading }) => {
    console.log(result)
  return (
    <ScrollContainer loading={false}>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
            {result.releaseDate ? (
              <ReleaseDate>{formatData(result.releaseDate)}</ReleaseDate>
            ) : null}
            <Votes votes={result.votes} />
          </Info>
        </Container>
      </Header>
      <Data>
        {result.overview && (
          <>
            <DataName>OverView</DataName>
            <DataValue>{result.overview ? result.overview : "-"}</DataValue>
          </>
        )}
        {loading && (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        )}
        {result.spoken_languages && (
          <>
            <DataName>Language</DataName>
              <DataValue>{result.spoken_languages[0].name}</DataValue>
          </>
        )}
      </Data>
    </ScrollContainer>
  );
};
