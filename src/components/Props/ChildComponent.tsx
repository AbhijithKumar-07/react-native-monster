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
      <Text> {name} </Text>
      <Text> {age} </Text>
    </View>
  );
};

export default ChildComponent;
