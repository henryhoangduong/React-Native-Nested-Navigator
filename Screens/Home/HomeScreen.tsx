import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
const HomeScreen = () => {
  const nav = useNavigation();
  return (
    <View style={[styles.root]}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          nav.navigate("HomeDetail" as never);
        }}
        title="GO TO DETAIL"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
