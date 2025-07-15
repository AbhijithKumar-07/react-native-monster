import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Internal Styling</Text>
    </View>
  );
};

// NOTE: Here, StyleSheet is a ReactNative Component </>

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 30,
    backgroundColor: "black",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    textAlign: "center",
  },
});

export default InternalStyle;
