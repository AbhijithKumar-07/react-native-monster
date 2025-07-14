import { View, Text } from "react-native";
import React, { Fragment } from "react";
import Greet from "../components/Greet";
import Monster from "../components/Monster";
import TextElement from "../components/TextElement";
import ViewElement from "../components/ViewElement";
import ButtonComponent from "../components/ButtonComponent";

const Index = () => {
  return (
    // <Fragment>
    //   <Greet />
    //   <Monster />
    // </Fragment>

    <View>
      <TextElement />
      <ViewElement />
      <ButtonComponent />

    </View>
  );
};

export default Index;
