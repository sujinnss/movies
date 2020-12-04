import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {movieApi} from "../api";

export default () => {
        const [movies,setMovies]= useState({
            result:[],
            error:null
        })
    const getData = async ()=>{
            const [result,resultError]= await movieApi.discover()
        setMovies({
            result,
            resultError
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
      <View>
        <Text>{movies.result?.length}</Text>
      </View>
    );
}
