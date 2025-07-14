import { View, Text, Button } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Button Component</Text>
      <Button title="Click me" color="teal" />
      <Button
        title="Click & Check Console"
        onPress={ () => console.log("You Pressed the Button!") }
      />
    </View>
  );
};

export default ButtonComponent;

// Html -->> button Element  -->>   <button> Click me </button>

// ReactJS -->> Button Element -->>  <Button> Click me <Button/>

// React Native -->> Button Component -->>  <Button title="Click me" />

// In React Native we Donot have 'onClick' Event -->> 
// Instead of using 'onClick' Event we use 'onPress' Event in React Native
