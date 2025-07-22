import { View, Text } from "react-native";
import React from "react";

interface Props {
  name: string;
  age: number;
}

const ChildComponent = ({ name, age }: Props) => {
  return (
    <View>
      <Text>Child Component</Text>
      <Text>Name: {name} </Text>
      <Text>Age: {age} </Text>
    </View>
  );
};

export default ChildComponent;
