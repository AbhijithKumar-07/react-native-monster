import { View, Text } from "react-native";
import React, { Fragment } from "react";
import Greet from "../components/Greet";
import Monster from "../components/Monster";
import TextElement from "../components/TextElement";
import ViewElement from "../components/ViewElement";
import ButtonComponent from "../components/ButtonComponent";
import PressableElement from "../components/PressableElement";

const Index = () => {
  return (
    // <Fragment>
    //   <Greet />
    //   <Monster />
    // </Fragment>

    <View style={{ marginLeft: 20, marginTop: 50, marginRight: 20 }}>
      <TextElement />
      <ViewElement />
      <ButtonComponent />
      <PressableElement />
    </View>
  );
};

export default Index;
