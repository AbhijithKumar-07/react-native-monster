import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const TextInputComponent = () => {
  let [name, setName] = useState("");
  let [isSubmitted, setIsSubmitted] = useState(false);
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
      <Button title="Submit" onPress={() => setIsSubmitted(true)} />
      {isSubmitted && name.length > 0 ? (
        <Text
          style={{
            backgroundColor: "black",
            padding: 10,
            color: "white",
            marginTop: 10,
            borderRadius: 10,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Hello {name} 🩷
        </Text>
      ) : null}
    </View>
  );
};

export default TextInputComponent;
