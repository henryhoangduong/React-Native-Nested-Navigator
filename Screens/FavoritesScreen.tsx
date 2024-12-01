import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoritesScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
