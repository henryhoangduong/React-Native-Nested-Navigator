import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Category1 = () => {
  return (
    <View style={[styles.root]}>
      <Text>Category 1</Text>
    </View>
  );
};

export default Category1;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
