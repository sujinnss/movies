import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";

//  ScrollContainer 는모든 탭에서 사용되기 때문에 하나의 컴포넌트로 만들어놨다.

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      backgroundColor: "black",
      flex: loading ? 1 : "auto",
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
