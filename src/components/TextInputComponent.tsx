import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const TextInputComponent = () => {
  let [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "black",
          borderRadius: 10,
        }}
        value={name}
        placeholder="Enter Your Name"
        onChangeText={(changedText) => setName(changedText)}
      />
    </View>
  );
};

export default TextInputComponent;
