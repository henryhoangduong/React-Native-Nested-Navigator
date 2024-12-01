import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const HomeDetailScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>HomeDetailScreen</Text>
    </View>
  );
};

export default HomeDetailScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
