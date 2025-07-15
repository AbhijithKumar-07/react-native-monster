import { View, Text } from "react-native";
import React from "react";

const DynamicContent = () => {
  const username = "Abhijith Kumar";

  interface product {
    (x: number, y: number): number;
  }
  const mutiply: product = (a, b) => a * b;

  type Details = {
    name: string;
    age: number;
  }
  const me: Details = {
    name: "Abhi",
    age: 19
  }
  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>9 * 9 = {mutiply(9, 9)}</Text>
      <Text>6 + 4 = {6 + 4}</Text>
      <Text> {me.name} </Text>
      <Text> {me.age} </Text>
    </View>
  );
};

export default DynamicContent;
