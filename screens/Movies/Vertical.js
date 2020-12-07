import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

import { apiImage } from "../../api";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import { TouchableOpacity } from "react-native";
import { trimText } from "../../utils";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0 5px 0;
`;

const Vertical = ({ id, poster, title, votes }) => {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate("Detail",{
      id,
      title
    });
  };
  return (
    <TouchableOpacity onPress={goDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
};

export default Vertical;