import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, ScrollView, RefreshControl } from "react-native";

//  ScrollContainer 는모든 탭에서 사용되기 때문에 하나의 컴포넌트로 만들어놨다.

const ScrollContainer = ({
  loading,
  children,
  contentContainerStyle,
  refreshFn,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn:PropTypes.func
};

export default ScrollContainer;
