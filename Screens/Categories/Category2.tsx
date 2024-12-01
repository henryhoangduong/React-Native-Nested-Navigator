import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Category2 = () => {
  return (
    <View style={[styles.root]}>
      <Text>Category 2</Text>
    </View>
  );
};

export default Category2;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
