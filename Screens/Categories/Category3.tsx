import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Category3 = () => {
  return (
    <View style={[styles.root]}>
      <Text>Category3</Text>
    </View>
  );
};

export default Category3;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
