import { View, Text, FlatList } from "react-native";
import React from "react";

const FlatListComponent = () => {
  const fruits = ["apple🍎", "banana🍌", "orange🍊"];
  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(ele) => ele}
        renderItem={({ item, index }) => {
          return <Text key={index}> {item} </Text>;
        }}
      />
    </View>
  );
};

export default FlatListComponent;
