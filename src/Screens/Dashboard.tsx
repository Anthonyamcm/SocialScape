import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { MainTabScreenProps } from "../Navigation/MainNavigator";
import { Screen } from "../Components/Screen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "../Components/Button";
import { colors } from "../Theme";
import { Text } from "../Components/Text";

interface DashboardScreenProps extends MainTabScreenProps<"Dashboard"> {}

export const DashboardScreen: FC<DashboardScreenProps> = function Landing(
  _props
) {
  const { navigation } = _props;

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.screen}
    >
      <View style={styles.row}>
        <Button
          preset="default"
          LeftAccessory={() => (
            <FontAwesome5
              name="bell"
              size={32}
              color={colors.palette.neutral300}
            />
          )}
          onPress={() => navigation.goBack()}
        />
        <Button
          preset="default"
          LeftAccessory={() => (
            <FontAwesome5
              name="search"
              size={32}
              color={colors.palette.neutral300}
            />
          )}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 32,
    flex: 1,
  },
  column: {
    flexDirection: "column",
    gap: 15,
  },
  row: {
    flexDirection: "row",
  },
});
