import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  font-weight: bold;
  margin-left: 10px;
  opacity: 0.6;
`;

const Link = ({ onPress, text, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <FontAwesome name={icon} color={"white"} size="22" />
        <Text style={{ color: "white" }}>{text}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Link;
