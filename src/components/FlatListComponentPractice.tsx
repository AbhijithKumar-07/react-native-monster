import { View, Text, FlatList } from "react-native";
import React from "react";

const FlatListComponentPractice = () => {
  const locations = [
    {
      id: 1,
      name: "Ranchi",
    },
    {
      id: 2,
      name: "Mumbai",
    },
    {
      id: 3,
      name: "Delhi",
    },
    {
      id: 4,
      name: "Chennai",
    },
    {
      id: 5,
      name: "Bengaluru",
    },
  ];
  return (
    <View>
      <FlatList
        data={locations}
        keyExtractor={(ele, index) => ele.id.toString()}   // In this Function the dataType of the return value should be 'String'
        renderItem={({ item, index }) => {
          return <Text> {item.name} </Text>;
        }}
      />
    </View>
  );
};

export default FlatListComponentPractice;

// FlatList Component in ReactNative
// For Traversing over the elements of an array we use FlatList Component in ReactNative
