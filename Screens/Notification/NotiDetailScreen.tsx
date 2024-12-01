import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotiDetailScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>Notification Detail Screen</Text>
    </View>
  );
};

export default NotiDetailScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
