import { View, Text, Image } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's explore Images</Text>
      <Image
        source={require("../assets/KohliX2016.jpg")}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />

      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 200, height: 200, marginTop: 20, marginBottom: 20 }}
      />
    </View>
  );
};

export default ImageComponent;
