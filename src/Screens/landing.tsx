import React, { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppStackScreenProps } from "../Navigation/AppNavigator";
import { Screen } from "../Components/Screen";
import Logo from "../../assets/logo.svg";
import { Button } from "../Components/Button";
import { colors } from "../Theme";

interface LandingScreenProps extends AppStackScreenProps<"Landing"> {}

export const LandingScreen: FC<LandingScreenProps> = function Landing(_props) {
  const { navigation } = _props;

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
          gradient={[colors.palette.primary100, colors.palette.primary200]}
          onPress={() => navigation.navigate("Login")}
        >
          {"Sign In"}
        </Button>
        <Button preset="filled" onPress={() => navigation.navigate("Register")}>
          {"Create Account"}
        </Button>
      </View>
    </Screen>
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
