import React, { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { MainTabScreenProps } from "../../Navigation/MainNavigator";
import { Screen } from "../../Components/Screen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "../../Components/Button";
import { colors } from "../../Theme";
import { useDashboard } from "./useDashboard";
import { Text } from "../../Components/Text";
import { formatTodayDate, getTimeOfDay } from "../../Utils";

interface DashboardScreenProps extends MainTabScreenProps<"Dashboard"> {}

export const DashboardScreen: FC<DashboardScreenProps> = function Landing(
  _props
) {
  const { navigation } = _props;

  const { user } = useDashboard();

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.screen}
    >
      <View style={styles.row}>
        <View style={[styles.row, { alignItems: "center" }]}>
          <View
            style={{
              width: 72,
              height: 72,
              borderRadius: 72 / 2,
              backgroundColor: colors.palette.neutral300,
              borderWidth: 3,
              borderColor: colors.palette.neutral200,
            }}
          />
          <View style={[styles.column, { paddingStart: 15 }]}>
            <Text
              preset="bold"
              size="lg"
              text={`${formatTodayDate()}`}
              style={{ color: colors.palette.neutral300 }}
            />
            <Text
              preset="bold"
              size="lg"
              text={`${getTimeOfDay()}, ${user.first_name}`}
            />
          </View>
        </View>
        <View
          style={[styles.row, { alignItems: "flex-start", marginLeft: "auto" }]}
        >
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
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 16,
    flex: 1,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
});
