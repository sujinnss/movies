import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import { Dimensions, PanResponder, Animated } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

// react-native의 스타일에선 px은 생략가능
const styles = {
  top: 80,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

//responder로 현재 방향을 알수있다
//position은 getTranslateTransform() 함수를 갖고 있다
// 드래드를 하고 다른 곳을 클릭시 dx와 dy는 처음 세팅값인 0으로 초기화 되기 때문에 이미지가 가운데로 온다
export default ({ result }) => {
  const [topIndex, setTopIndex] = useState(0);
  const nextCard = () => setTopIndex((currentValue) => currentValue + 1);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (evt, { dx, dy }) => {
      if (dx >= 250) {
        console.log("오른족");
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
        }).start(nextCard);
      } else if (dx <= -250) {
        console.log("왼쪽");
        Animated.spring(position, {
          toValue: {
            x: -WIDTH - 100,
            y: dy,
          },
        }).start(nextCard);
      } else {
        console.log("아무것도 아님");
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          // bounciness: 50,
        }).start();
      }
    },
  });
  // 드래그에 따라 회전
  const roadtaionValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-8deg", "0deg", "8deg"],
    extrapolateLeft: "clamp",
  });
  const secondeCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolateLeft: "clamp",
  });
  const secondeCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolateLeft: "clamp",
  });
  useEffect(() => {
    position.setValue({ x: 0, y: 0 });
  }, [topIndex]);
  return (
    <Container>
      {result.map((result, index) => {
        if (index < topIndex) {
          return null;
        } else if (index === topIndex) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: roadtaionValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topIndex + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondeCardOpacity,
                transform: [{ scale: secondeCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
