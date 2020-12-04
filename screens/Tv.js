import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import { tvApi } from "../api";

export default () => {
  const [show, setShow] = useState({
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    toRatedError: null,
    popularError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, toRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShow({
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      toRatedError,
      popularError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View>
      <Text>{show.popular?.length}</Text>
    </View>
  );
};
