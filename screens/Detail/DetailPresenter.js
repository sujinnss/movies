import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import {ActivityIndicator, Dimensions} from "react-native";
import {apiImage} from "../../api";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import {formatData} from "../../utils";
import Link from "../../components/Detail/Link";

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
// const ReleaseDate = styled.Text`
//   margin-bottom: 7px;
//   opacity: 0.8;
//   color: white;
//   font-size: 13px;
//   font-weight: 500;
// `;

const Data = styled.View`
  margin-top: 30px;
  padding: 0 30px 60px 30px;
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

export default ({ openBrowser, result, loading }) => {
  console.log(result);
  return (
    <ScrollContainer loading={false}>
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Container>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title}</Title>
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
        {result.release_date && (
          <>
            <DataName>Release Date</DataName>
            <DataValue>{formatData(result.releaseDate)}</DataValue>
          </>
        )}
        {result.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
          </>
        )}
        {result.runtime && (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
          </>
        )}
        {result.first_air_date && (
          <>
            <DataName>First Air Date</DataName>
            <DataValue>{formatData(result.first_air_date)} </DataValue>
          </>
        )}
        {result.genres && (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {result.genres.map((data) => `#${data.name} `)}{" "}
            </DataValue>
          </>
        )}
        {result.number_of_episodes && (
          <>
            <DataName>Number Of Episodes</DataName>
            <DataValue>{result.number_of_episodes} </DataValue>
          </>
        )}
        {result.imdb_id && (
          <>
            <DataName>Links</DataName>
            <Link
              text={"IMDB page"}
              icon={"imdb"}
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
              }
            />
          </>
        )}
        {result.videos.results?.length > 0 && (
          <>
            <DataName>Videos</DataName>
            {result.videos.results.map((video) => (
              <Link
                text={video.name}
                key={video.id}
                icon={"youtube-play"}
                onPress={() =>
                  openBrowser(
                    `https://www.youtube.com/watch?v=/${video.key}`
                  )
                }
              />
            ))}
          </>
        )}
      </Data>
    </ScrollContainer>
  );
};
