import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HelpScreen = () => {
  return (
    <View  style={[styles.root]}>
      <Text>HelpScreen</Text>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  }
});
