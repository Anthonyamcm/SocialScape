import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { MainTabScreenProps } from "../../Navigation/MainNavigator";
import { Screen } from "../../Components/Screen";
import Logo from "../../assets/logo.svg";
import { Button } from "../../Components/Button";
import { colors } from "../../Theme";

interface ProfileScreenProps extends MainTabScreenProps<"Profile"> {}

export const ProfileScreen: FC<ProfileScreenProps> = function Landing(_props) {
  const { navigation } = _props;

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.screen}
    ></Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 32,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  column: {
    flexDirection: "column",
    gap: 15,
  },
});
