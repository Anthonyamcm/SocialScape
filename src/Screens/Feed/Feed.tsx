import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { MainTabScreenProps } from "../../Navigation/MainNavigator";
import { Screen } from "../../Components/Screen";

interface FeedScreenProps extends MainTabScreenProps<"Feed"> {}

export const FeedScreen: FC<FeedScreenProps> = function Landing(_props) {
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
