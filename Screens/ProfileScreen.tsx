import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
const ProfileScreen = () => {
  return (
    <View style={[styles.root]}>
      <Text>ProfileScreen</Text>
      <Button title="LOG OUT" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
