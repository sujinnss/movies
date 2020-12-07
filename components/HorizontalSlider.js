import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import { ScrollView } from "react-native";

const HorizontalSlider = ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 30 }}
      style={{ marginTop: 20, marginBottom: 40 }}
    >
      {children}
    </ScrollView>
  </>
);

HorizontalSlider.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
