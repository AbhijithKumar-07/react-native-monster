import { View, Text, FlatList } from "react-native";
import React from "react";

const FlatListComponent = () => {
  const fruits = ["apple🍎", "banana🍌", "orange🍊"];
  return (
    <View>
      <FlatList
        data={fruits}
        keyExtractor={(ele, index) => ele}     // In this Function the dataType of the return value should be 'String'
        renderItem={({ item, index }) => {
          return <Text key={index}> {item} </Text>;
        }}
      />
    </View>
  );
};

export default FlatListComponent;

// FlatList Component in ReactNative
// For Traversing over the elements of an array we use FlatList Component in ReactNative
