import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../Components/Screen";
import Logo from "../../assets/logo.svg";
import { Button } from "../Components/Button";
import { colors } from "../Theme";

export function Landing() {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.screen}
    >
      <Logo style={{ alignSelf: "center" }} />
      <View style={styles.column}>
        <Button
          preset="gradient"
          colors={[colors.palette.primary100, colors.palette.primary200]}
        >
          {"Sign In"}
        </Button>
        <Button preset="filled">{"Create Account"}</Button>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 32,
    justifyContent: "center",
    height: "100%",
  },
  column: {
    flexDirection: "column",
    gap: 15,
  },
});
