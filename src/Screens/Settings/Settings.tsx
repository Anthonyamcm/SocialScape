import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { MainTabScreenProps } from "../../Navigation/MainNavigator";
import { Screen } from "../../Components/Screen";
import { Button } from "../../Components/Button";
import { colors } from "../../Theme";
import { useSettings } from "./useSettings";

interface SettingsScreenProps extends MainTabScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = function Landing(
  _props
) {
  const { navigation } = _props;

  const { logOut } = useSettings(navigation);

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.screen}
    >
      <Button
        preset="gradient"
        gradient={[colors.palette.error100, colors.palette.error200]}
        onPress={() => logOut()}
      >
        {"Log Out"}
      </Button>
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
