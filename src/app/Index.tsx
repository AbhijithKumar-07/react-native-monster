import { View, Text, ScrollView } from "react-native";
import React, { Fragment } from "react";
import Greet from "../components/Greet";
import Monster from "../components/Monster";
import TextElement from "../components/TextElement";
import ViewElement from "../components/ViewElement";
import ButtonComponent from "../components/ButtonComponent";
import PressableElement from "../components/PressableElement";
import ImageComponent from "../components/ImageComponent";
import DynamicContent from "../components/DynamicContent";
import InlineStyle from "../components/InlineStyle";
import InternalStyle from "../components/InternalStyle";
import ExternalStyle from "../components/ExternalStyle";
import FlatListComponent from "../components/FlatListComponent";
import FlatListComponentPractice from "../components/FlatListComponentPractice";
import ParentComponent from "../components/Props/ParentComponent";
import TextInputComponent from "../components/TextInputComponent";
import UseReducerHook from "../Hooks/UseReducerHook";


const Index = () => {
  return (
    // <Fragment>
    //   <Greet />
    //   <Monster />v
    // </Fragment>

    <View style={{ marginLeft: 20, marginTop: 50, marginRight: 20 }}>
      {/* <TextElement />
      <ViewElement />
      <ButtonComponent />
      <PressableElement />
      <ImageComponent />
      <DynamicContent />
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle />
      <FlatListComponent />
      <FlatListComponentPractice />
      <ParentComponent />
      <TextInputComponent /> */}
      <UseReducerHook />
    </View>
  );
};

export default Index;
