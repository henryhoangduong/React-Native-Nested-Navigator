import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NotificationsScreen = () => {
  const nav = useNavigation();
  return (
    <View style={[styles.root]}>
      <Text>Notifications Screen</Text>
      <Button
        onPress={() => [nav.navigate("NotificationDetail" as never)]}
        title="GO TO DETAILS"
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
